---
id: getting-started
title: Starting a Server Project
---

Purpose: To quickly get going with a Node.js project that deals with TypeScript, Rollup, Prettier, ESLint, Jest, etc. use [tsdx](https://tsdx.io/).

```bash
npx tsdx create YOUR_SERVER_PROJECT
```

Select "basic". This will create a project with some of the necessary tooling.

- Edit license as needed.
- If you don't use `yarn`, delete `yarn.lock` and run `npm install` to generate the `package-lock.json`.
- Run `git init` to initialize the git repo.

At this point, you should commit the files and then pick a server library to work with.
