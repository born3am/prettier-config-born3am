/** @type {import('prettier').Config} */
const prettierConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  rangeStart: 0,
  rangeEnd: Infinity,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  // Overrides for specific file types
  overrides: [
    {
      files: ['*.json'],
      options: {
        printWidth: 200,
      },
    },
    {
      files: ['tsconfig.json', 'tsconfig.*.json', 'jsconfig.json', 'jsconfig.*.json'],
      options: {
        parser: 'jsonc',
      },
    },
    {
      files: ['*.md'],
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};

export default prettierConfig;
