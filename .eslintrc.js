module.exports = {
  root: true,
  extends: ["airbnb-typescript"],
  rules: {
    'prettier/prettier': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'import/prefer-default-export': 'off',
    'no-prototype-builtins': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};