import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  { languageOptions: { 
    globals: globals.browser
   } ,
   rules: {
    "no-unused-vars": "error",
    "no-undefined": "error"
   }
  }
];
