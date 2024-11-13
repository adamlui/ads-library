import js from '@eslint/js'
import json from '@eslint/json'

export default [
    {
        files: ['**/*.js', '**/*.mjs'], ...js.configs.recommended,
        rules: {
            'indent': 'off', 'no-unexpected-multiline': 'off', 'key-spacing': 'off', // allow whitespace anywhere
            'quotes': ['error', 'single'], // enforce single quotes for string literals
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        },
        languageOptions: { ecmaVersion: 'latest', sourceType: 'script' }
    },
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' }},
    { files: ['**/*.json'], ...json.configs['recommended'] }
]
