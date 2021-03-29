---
id: koa
title: Koa
---

Koa is a web server framework designed to create backend APIs.

## Installation

Install koa, koa-router, koa-cors, and supertest. Koa-cors will enable you to hit your API from different domains (don't install if you don't need). Supertest allows you to easily run tests on your endpoints.

The guide below assumes you've run `tsdx` to generate a `basic` library with TypeScript, Jest, etc. (or that you've set up the build yourself already such that you have Jest and that `npm start` watches for changes and builds artifacts in the `dist` directory, also `package.json` `main` should point to your entry file in `dist` i.e. `"main": "dist/index.js"` - this will tell `nodemon` where to enter).

```bash
npm install koa @koa/router @koa/cors
npm install -D @types/koa @types/koa__router @types/koa__cors supertest @types/supertest nodemon
```

## Adding Code and Tests

Adapted from [this article](https://medium.com/scrum-ai/4-testing-koa-server-with-jest-week-5-8e980cd30527).

In `src/index.ts`

```ts
import app from "./app";

const port = process.env.PORT || 3001;
app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);
```

In `src/app.ts`

```ts
import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";

const app = new Koa();
const router = new Router();

router.get("/", (ctx: Koa.Context) => {
  ctx.body = "Hello World!!";
});

app.use(cors()); // if clients can be from a different domain
app.use(router.routes());

export default app;
```

In `test/app.test.ts`

```ts
import request from "supertest";
import app from "../src/app";

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello World");
});
```

You should now be able to run the tests with `npm run test` to test your endpoint.

In order to run your server you can run `npm start` and `node dist/index.js`.
To run in development with changes being watched and automatic restarts, you'll need to add the following to your `package.json` `scripts` section.

```json
"serve": "nodemon"
```

Then you can run this in one terminal (runs the build in a watch mode):

```bash
npm start
```

and this in another (runs the built server code from the dist directory and restarts server after any changes):

```bash
npm run serve
```

You should now be able to hit the endpoint via `localhost`.
