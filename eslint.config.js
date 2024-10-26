// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigStandard from "eslint-config-standard";

const compat = new FlatCompat();

export default [
  ...compat.config(eslintConfigStandard),
  {
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      // Puedes agregar más reglas según tus necesidades
    }
  }
];