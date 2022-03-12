module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-shadow": "off",
    // TODO: process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    "no-debugger": "off",
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["warn", { code: 80, ignoreComments: true, ignoreUrls: true }],
    "prettier/prettier": 1,
    "react/no-unescaped-entities": [
      "error",
      {
        forbid: [
          {
            char: ">",
            alternatives: ["&gt;"],
          },
          {
            char: "}",
            alternatives: ["&#125;"],
          },
          {
            char: "&",
            alternatives: ["&amp;"],
          },
        ],
      },
    ],
  },
};
