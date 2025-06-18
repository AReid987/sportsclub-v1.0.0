module.exports = {
    '*.{js,jsx,ts,tsx}': [
        'biome check --apply-unsafe',
        'eslint --fix',
    ],
    '*.{css,md,json}': [
        'prettier --write',
    ],
    '*.py': [
        './.venv/bin/pylint --rcfile=.pylintrc',
    ],
};