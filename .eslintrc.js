module.exports = {
  env: {
    "node": true,
    "mocha": true,
    "es6": true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
};
