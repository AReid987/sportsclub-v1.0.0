import os
import re
import requests
import json
import sys
from dotenv import load_dotenv

load_dotenv()


# --- CONFIGURATION ---
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')  # Set this in your environment
REPO = 'AReid987/sportsclub-v1.0.0'
PROJECT_NUMBER = 2  # Your project number
OWNER = 'AReid987'
BACKLOG_FILE = '/Users/antonioreid/CODE/00_PROJECTS/00_APPS/02_SPORTSCLUB/00_AGILE_DOCS/Sportsclub/Pages/Agile-PM/Backlog-Stories'

# --- HEADERS ---
HEADERS = {
    'Authorization': f'token {GITHUB_TOKEN}',
    'Accept': 'application/vnd.github+json',
}

# --- HELPERS ---
def parse_backlog_items(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    # Match lines like '- [ ] Story' or '- Story'
    items = [re.sub(r'^[-*] \[? ?\]? ?', '', line).strip() for line in lines if line.strip().startswith(('-', '*'))]
    return [item for item in items if item]

def get_backlog_files(path):
    if os.path.isdir(path):
        # Return all files in the directory (non-hidden, non-dir)
        return [os.path.join(path, f) for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and not f.startswith('.')]
    elif os.path.isfile(path):
        return [path]
    else:
        raise FileNotFoundError(f"No such file or directory: {path}")

def run_graphql_query(query, variables=None):
    url = 'https://api.github.com/graphql'
    payload = {'query': query}
    if variables:
        payload['variables'] = variables
    resp = requests.post(url, headers=HEADERS, json=payload)
    resp.raise_for_status()
    return resp.json()

def get_project_v2_id(owner, project_number):
    query = '''
    query($login: String!, $number: Int!) {
      user(login: $login) {
        projectV2(number: $number) {
          id
        }
      }
    }
    '''
    variables = {"login": owner, "number": project_number}
    data = run_graphql_query(query, variables)
    return data['data']['user']['projectV2']['id']

def create_issue_graphql(repo, title, body=None):
    owner, name = repo.split('/')
    # Get repository ID
    repo_query = '''
    query($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        id
      }
    }
    '''
    repo_vars = {"owner": owner, "name": name}
    repo_data = run_graphql_query(repo_query, repo_vars)
    repo_id = repo_data['data']['repository']['id']
    # Now create the issue
    mutation = '''
    mutation($repoId: ID!, $title: String!, $body: String) {
      createIssue(input: {repositoryId: $repoId, title: $title, body: $body}) {
        issue {
          id
          number
        }
      }
    }
    '''
    variables = {"repoId": repo_id, "title": title, "body": body}
    data = run_graphql_query(mutation, variables)
    return data['data']['createIssue']['issue']['id'], data['data']['createIssue']['issue']['number']

def add_issue_to_project_v2(project_id, issue_id):
    mutation = '''
    mutation($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: {projectId: $projectId, contentId: $contentId}) {
        item {
          id
        }
      }
    }
    '''
    variables = {"projectId": project_id, "contentId": issue_id}
    run_graphql_query(mutation, variables)

def get_project_items_and_issue_numbers(project_id):
    # Get up to 100 items (pagination can be added if needed)
    query = '''
    query($projectId: ID!) {
      node(id: $projectId) {
        ... on ProjectV2 {
          items(first: 100) {
            nodes {
              id
              content {
                ... on Issue {
                  id
                  number
                  state
                }
              }
            }
          }
        }
      }
    }
    '''
    variables = {"projectId": project_id}
    data = run_graphql_query(query, variables)
    items = data['data']['node']['items']['nodes']
    # Return list of (project_item_id, issue_id, issue_number)
    result = []
    for item in items:
        if item['content'] and item['content'].get('id'):
            result.append((item['id'], item['content']['id'], item['content']['number']))
    return result

def remove_item_from_project(project_item_id):
    mutation = '''
    mutation($itemId: ID!) {
      deleteProjectV2Item(input: {itemId: $itemId}) {
        deletedItemId
      }
    }
    '''
    variables = {"itemId": project_item_id}
    run_graphql_query(mutation, variables)

def close_issue(issue_id):
    mutation = '''
    mutation($issueId: ID!) {
      closeIssue(input: {issueId: $issueId}) {
        issue {
          id
          state
        }
      }
    }
    '''
    variables = {"issueId": issue_id}
    run_graphql_query(mutation, variables)

if __name__ == '__main__':
    if not GITHUB_TOKEN:
        print('Please set the GITHUB_TOKEN environment variable.')
        exit(1)
    if len(sys.argv) > 1 and sys.argv[1] == 'cleanup':
        print('Cleaning up all issues from project and closing them...')
        project_id = get_project_v2_id(OWNER, PROJECT_NUMBER)
        items = get_project_items_and_issue_numbers(project_id)
        for project_item_id, issue_id, issue_number in items:
            print(f'Removing issue #{issue_number} from project...')
            remove_item_from_project(project_item_id)
            print(f'Closing issue #{issue_number}...')
            close_issue(issue_id)
        print('Cleanup complete!')
        sys.exit(0)
    backlog_files = get_backlog_files(BACKLOG_FILE)
    print(f'Found {len(backlog_files)} backlog files.')
    project_id = get_project_v2_id(OWNER, PROJECT_NUMBER)
    for file in backlog_files:
        title = os.path.splitext(os.path.basename(file))[0]
        with open(file, 'r') as f:
            body = f.read()
        print(f'Creating issue: {title}')
        issue_id, issue_number = create_issue_graphql(REPO, title, body)
        print(f'Adding issue #{issue_number} to project...')
        add_issue_to_project_v2(project_id, issue_id)
    print('Done!')
