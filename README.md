# prettier-config
Prettier configuration for Born3am Projects

## Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Scripts](#scripts)

## Installation

1. Install the `@born3am/prettier-config` package as a dev dependency.

  ```bash
  npm install --save-dev @born3am/prettier-config
  ```

2) Edit `package.json`:

```jsonc
{
  // ...
  "prettier": "@born3am/prettier-config"
}
```
## Configuration
The package `@born3am/prettier-config` has no **dependencies**, but just the following config:

  ```js
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
  ```

### Usage

`prettier` is integrated with `eslint` and rules from both are applied to all javascript/typescript files in one go, via the eslint script only.

Other files like `.md`, `.yml`, `.json`, `.html`, `.css`, `.scss`, `.sass`, `.less` are handled uniquely by `prettier` and linting rules cannot be applied to them inside `eslint.config.js`.

### Scripts
Setup `package.json` Scripts:

```json
{
 "scripts": {
    "lint": "eslint -c eslint.config.js --cache .",
    "lint:fix": "npm run lint -- --no-cache --fix",
    "prettier": "prettier --check --cache --no-error-on-unmatched-pattern '**/*.md' '**/*.yml' '**/*.json' '**/*.html' '**/*.css' '**/*.scss' '**/*.sass' '**/*.less'",
    "prettier:fix": "npm run prettier -- --no-cache --write",
    "fix": "npm run prettier:fix ; npm run lint:fix"
  }
}
```

Regardless of the file type, the fix script should always handle all files.

