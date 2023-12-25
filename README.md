# @taskany/eslint-plugin-rules

## Installation

You can install this package using npm. Make sure ESLint is already installed in your project.

```bash
npm install --save-dev @taskany/eslint-plugin-rules
```

## Usage

After installing the package, update your ESLint configuration file (e.g., .eslintrc.js or .eslintrc.json) to include the new rule.

```json
{
  "plugins": ["@taskany/rules"],
  "rules": {
    "@taskany/rules/prefer-interface": "error",
  }
}
```