---
id: cra
title: Create React App
slug: /
---

## Create your app

Run [create-react-app](https://create-react-app.dev/docs/adding-typescript/), substitute `my-app` for your app name.

```bash
npx create-react-app my-app --template typescript
```

## Prettier

Instructions from [CRA Docs](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically).

```bash
npm install -D husky lint-staged prettier
```

Add the following to `package.json`

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
}
```
