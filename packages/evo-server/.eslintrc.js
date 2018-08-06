const path = require('path');

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: 'babel-eslint',

    extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],

    plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],

    globals: {
        __DEV__: true,
        React: true
    },

    env: {
        browser: true,
        jest: true
    },

    rules: {
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        indent: ["error", 4, {"SwitchCase": 1}],
        'max-len': ['error', 180],
        'no-underscore-dangle': ['off'],
        'class-method-use-this': ['off'],
        'class-methods-use-this': ['off'],
        'react/jsx-boolean-value': ['off'],

        // TODO - Review the following with team
        'import/prefer-default-export': ['off'],
        'react/require-default-props': ['off'],
        'import/no-named-as-default': ['off'],
        'react/sort-comp': ['off'],

        // react-native alias to react-native-web throws eslint errors
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/extensions': ['off'],

        // Recommend not to leave any console.info in your code
        // Use console.error, console.warn and console.info instead
        // https://eslint.org/docs/rules/no-console
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info']
            }
        ],

        // Prefer destructuring from arrays and objects
        // http://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true
                },
                AssignmentExpression: {
                    array: false,
                    object: false
                }
            },
            {
                enforceForRenamedProperties: false
            }
        ],

        // TODO - investigate why <Link /> button errors on this rule
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': ['off'],

        // Allow .js files to use JSX syntax
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
        'react/jsx-tag-spacing': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // Functional and class components are equivalent from React’s point of view
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': 'off'
    }
};
