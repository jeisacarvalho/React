module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', "prettier"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
  'react/jsx-filename-extension ': [
    "narn",
    {
      extension: [".js", ".jsx"]
    }
  ],
  'react/react-in-jsx-scope' : "off",
  'comma-dangle': "off"

  }
}