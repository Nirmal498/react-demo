import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import css from "eslint-plugin-css";
import unicorn from "eslint-plugin-unicorn";
import folders from "eslint-plugin-folders";
import noRelativeImports from "eslint-plugin-no-relative-import-paths";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended, // Base JavaScript rules
  react.configs.recommended, // React rules
  prettier.configs.recommended, // Prettier formatting rules
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      jest: true,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        alias: {
          map: [["@project", "./src"]],
          extensions: [".js", ".jsx", ".json", ".scss", ".svg", ".png"],
        },
        node: {
          paths: ["src"],
        },
      },
    },
    plugins: {
      react,
      prettier,
      css,
      unicorn,
      folders,
      "no-relative-import-paths": noRelativeImports,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },
    rules: {
      "react/prop-types": "off",
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelAttributes: ["htmlFor", "id"],
          assert: "htmlFor",
          depth: 25,
        },
      ],
      "react/no-unused-prop-types": "error",
      "jsx-a11y/no-static-element-interactions": [
        "error",
        { allowExpressionValues: true },
      ],
      "jsx-a11y/click-events-have-key-events": "error",
      "react/jsx-props-no-spreading": [
        "error",
        {
          html: "ignore",
          exceptions: [
            "Outlet",
            "Slider",
            "Form.Control",
            "TGButton",
            "Menu",
            "Form.Select",
            "TablePagination",
          ],
        },
      ],
      "import/no-unresolved": "error",
      "react/require-default-props": "error",
      "react/no-unescaped-entities": "error",
      "import/order": "off",
      "import/no-cycle": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "no-restricted-exports": "off",
      "no-unused-vars": "error",
      "react/jsx-key": "error",
      "import/no-extraneous-dependencies": "off",
      "react/button-has-type": "error",
      "folders/match-regex": [2, "^[A-Z][a-z]+(?:[A-Z][a-z]+)*$", "/src/"],
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        { allowSameFolder: true, rootDir: "src", prefix: "@project" },
      ],
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            pascalCase: true,
          },
          ignore: ["index.jsx", "\\.js$", "\\.test.jsx$"],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/no-duplicates": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["react", "react-dom"],
            ["^react-", "^@?\\w"],
            ["^\\u0000"],
            ["@project/Components-"],
            ["@project/Pages", "@project/Routes"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(svg)$", "^.+\\.?(png)$"],
            ["^.+\\.?(css)$"],
          ],
        },
      ],
    },
  },
];
