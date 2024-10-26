// eslint.config.js
module.exports = [
  {
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];