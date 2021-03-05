---
id: cra
title: Create App
slug: /
---

## Create React App

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

## React Router

Install the following packages.

```bash
npm install react-router-dom @types/react-router-dom
```

You could now paste/use the following in `App.tsx`. You will make your own `Page` components - this is only an example of where to start with the Router.

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/about">
            <div>About Page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```
