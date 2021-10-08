module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "linebreak-style": 0,
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'error',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'getters',
        'setters',
        'lifecycle',
        'render',
        'instance-methods',
        'everything-else'
      ]
    }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-cycle': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { 
      'before': false,
      'after': true,
      'overrides': { arrow: { 'before': true, 'after': true }} 
    }],
    'import/order': ['error', { 
      groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
      'newlines-between': 'always',
    }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-restricted-imports': ['error', 'react-jss', '@material-ui/core', '@material-ui/icons', 'i18next', 'react-i18next'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true  }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-undef': 'off',
  },
};