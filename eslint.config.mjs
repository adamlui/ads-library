import json from '@eslint/json'
import importPlugin from 'eslint-plugin-import'
import markdown from '@eslint/markdown'
import yml from 'eslint-plugin-yml'

export default [
    {
        files: ['**/*.js', '**/*.mjs'],
        plugins: { 'import': importPlugin },
        rules: { ...importPlugin.flatConfigs.recommended.rules }
    },
    { files: ['**/*.json'], ignores: ['**/package-lock.json'], language: 'json/json', ...json.configs.recommended },
    {
        files: ['**/*.md'], language: 'markdown/commonmark', plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off', // allow headings to skip levels
            'markdown/fenced-code-language': 'off', // allow code blocks w/ no language specified
            'markdown/no-missing-label-refs': 'off' // allow missing label references
        }
    },
    { files: ['**/*.yaml, **/*.yml'], ...yml.configs['flat/standard'][1] }
]
