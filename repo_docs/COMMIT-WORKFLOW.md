# Git Commit Workflow

## Description

### Elevate Your Git Workflow with Lefthook and AI

Streamline your development process and enhance code quality with a sophisticated Git workflow that automates commit message generation, linting, and formatting. This guide will walk you through setting up a powerful workflow in your repository that uses `lefthook` to manage Git hooks, `cz-git` for AI-powered commit messages, and a suite of popular linters managed by `lint-staged`.

This workflow will be triggered by any variation of git commit, including `git commit -m '...'`, and custom commands like `xg commit` and `pnpm commit`.

### The Automated Workflow at a Glance

1. **Initiate a Commit:**
    - When you run git commit (or a custom variant), `lefthook` will intercept the command.
2. **AI-Powered Commit Messages:**
    - The prepare-commit-msg hook will trigger cz-git, providing an interactive prompt to select the commit type.
    - With the ai and emoji flags enabled, it will automatically generate a descriptive commit message based on your staged changes.
3. **Linting and Formatting Staged Files:**
    - After you approve the commit message, lint-staged will run a series of linters and formatters on your staged files.
    **This setup will include:**
        - **Biome.js:**
            - For high-performance linting and formatting of your web-based files.
        - **ESLint v9:**
            - To catch and fix problems in your JavaScript and TypeScript code.
        - **Prettier:**
            - To ensure consistent code formatting across your project.
        - **Pylint:**  
            - To maintain code quality for your Python scripts.
4. **Automatic Fixes:**
    - The linters will automatically fix any errors they can and re-stage the files.
5. **Commit Finalization:**
    - Once the linters have successfully run, your commit will be finalized with the generated message and the clean, formatted code.

## Git Hooks

### Lefthook

- Configuration file for lefthook.yml is in the project root
  - `pre-commit:` This hook will run before a commit is made.
        `parallel: true:` Allows lefthook to run commands in parallel if you add more in the future.
        `lint-staged:` This is a named command.
        `run: pnpm dlx lint-staged:` The command that gets executed.
    `prepare-commit-msg:` This hook runs after the pre-commit hook and is used to create or edit the commit message.
        `cz-git:` A named command for our commit message generator.
            `interactive: true:` This is a crucial lefthook option that tells it the script requires user input, making it compatible with cz-git's interactive prompt.
            `run: exec < /dev/tty && npx cz --hook || true:` This command ensures cz-git runs correctly in an interactive terminal session.

### `cz-git` with AI and Emoji Support

- `cz-git` works with `commitlint` to enforce conventional commit messages.
- There is a `commitlint.config.js` file in the project root

### `lint-staged`

- There is a .lintstagedrc.js file in the project root to configure which linters run on which files.

## Docs

### Lint Staged

- <https://github.com/lint-staged/lint-staged>

### EsLint

- <https://eslint.org/blog/2024/04/eslint-v9.0.0-released/>

### Prettier

- <https://prettier.io/>

### Pylint

- <https://pylint.org/>

### Biome.js

- <https://biomejs.dev/>

### cz-git

- <https://cz-git.qbb.sh>>

### GPT Lint

- <https://github.com/gptlint/gptlint>
