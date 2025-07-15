module.exports = {
    extends: ['@commitlint/config-conventional'],
    prompt: {
        emoji: true,
        alias: { fd: 'docs: fix typos' },
        messages: {
            type: 'Select the type of change that you\'re committing:',
            scope: 'Denote the SCOPE of this change (optional):',
            customScope: 'Denote the SCOPE of this change:',
            subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixsSelect: 'Select the ISSUES type of change list by this change (optional):',
            customFooterPrefixs: 'Input ISSUES prefix:',
            footer: 'List any ISSUES CLOSED by this change (optional):\n',
            confirmCommit: 'Are you sure you want to proceed with the commit above?',
        },
        types: [
            {
                value: 'feat',
                name: 'feat:     A new feature',
                emoji: '✨'
            },
            {
                value: 'fix',
                name: 'fix:      A bug fix',
                emoji: '🐛'
            },
            {
                value: 'docs',
                name: 'docs:     Documentation only changes',
                emoji: '📚'
            },
            {
                value: 'style',
                name: 'style:    Changes that do not affect the meaning of the code',
                emoji: '💎'
            },
            {
                value: 'refactor',
                name: 'refactor: A code change that neither fixes a bug nor adds a feature',
                emoji: '📦'
            },
            {
                value: 'perf',
                name: 'perf:     A code change that improves performance',
                emoji: '🚀'
            },
            {
                value: 'test',
                name: 'test:     Adding missing tests or correcting existing tests',
                emoji: '🚨'
            },
            {
                value: 'build',
                name: 'build:    Changes that affect the build system or external dependencies',
                emoji: '🛠️'
            },
            {
                value: 'ci',
                name: 'ci:       Changes to our CI configuration files and scripts',
                emoji: '⚙️'
            },
            {
                value: 'chore',
                name: 'chore:    Other changes that don\'t modify src or test files',
                emoji: '♻️'
            },
            {
                value: 'revert',
                name: 'revert:   Reverts a previous commit',
                emoji: '🗑️'
            }
        ],
        useAI: true,
        aiNumber: 1,
        apiBaseUrl: 'https://api.groq.com/openai/v1/',
        apiKey: process.env.GROQ_API_KEY,
        aiRequestBody: (prompt) => ({
            model: 'llama-3.3-70b-versatile',
            messages: [
                {
                    role: 'system',
                    content: 'You are a git commit message generator that writes concise, conventional commit messages.',
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 200,
            top_p: 1,
        }),
        aiResponseParse: (data) => {
            try {
                const jsonResponse = JSON.parse(data);
                return [jsonResponse.choices[0]?.message?.content || ''];
            } catch (e) {
                console.error("Error parsing Groq API response:", e);
                return [];
            }
        },
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixs: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
        customIssuePrefixsAlign: 'top',
        emptyIssuePrefixsAlias: 'skip',
        customIssuePrefixsAlias: 'custom',
        allowCustomIssuePrefixs: true,
        allowEmptyIssuePrefixs: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
};