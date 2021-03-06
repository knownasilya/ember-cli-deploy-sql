module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    'no-unused-vars': [2, {
      argsIgnorePattern: '^_'
    }],
    'arrow-parens': [2, 'as-needed', {
      requireForBlockBody: true
    }]
  }
};
