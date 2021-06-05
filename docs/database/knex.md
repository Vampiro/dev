---
id: knex
title: Knex
---

Knex is a query builder for databases. It can create and query tables.

## Installation

```bash
npm install knex rimraf ts-node
```

## Configuration

Create a file called `knex.ts`. Replace `YOUR_DATABASE_NAME`.

```ts
// knex.ts
import knex from "knex";

export default knex({
  client: "sqlite3",
  connection: {
    filename: "./YOUR_DATABASE_NAME.sqlite",
  },
  useNullAsDefault: true,
});
```

## Create Table

Create a file called `createTable.ts`.

```ts
// createTable.ts
import { exit } from "process";
import knex from "./knex";

async function createTables() {
  try {
    console.log("Creating User table.");
    await knex.schema.createTable("User", (table) => {
      table.string("id").primary();
      table.string("firstName");
    });

    exit();
  } catch (e) {
    console.error(e);
    exit();
  }
}

createTables();
```

## Package.json scripts

In your `package.json`, insert these into the `scripts` sections:

```json
"db-create": "npm run db-drop && ts-node ./createTables.ts",
"db-drop": "rimraf ./YOUR_DATABASE_NAME.sqlite"
```
