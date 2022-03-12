module.exports = {
  endOfLine: 'auto',
  singleQuote: true,
  quoteProps: "as-needed",
  printWidth: 80,
  overrides: [
    {
      files: [
        "*.scss",
        "*.json",
        "*.d.ts",
        "*.js",
        "*.ts",
        "*.tsx",
      ],
      options: {
        singleQuote: false,
      }
    },
    {
      files: [
        "*.json",
      ],
      options: {
        printWidth: 200,
      }
    },
  ],
}

// {
//   "semi": false,
//   "singleQuote": true,
//   "trailingComma": "all"
// }