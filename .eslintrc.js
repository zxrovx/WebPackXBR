module.exports = {
  extends: '@antfu',

  ignorePatterns: ['**/*.scss'],
  rules: {
    'no-console': ['error', { allow: ['time', 'timeEnd', 'error'] }],
    'yml/no-empty-mapping-value': 0,
  },
}
