---
id: gql
title: gql
---

# Fauna

1. Make a database in Fauna
2. Create a basic schema.gql in this project
3. Upload schema to Fauna. Fauna will add in create, update, and delete mutations as well as a read query. You will be responsible for adding in additional queries/mutations to the originating schema.
4. `npm install graphql graphql-request` and `npm install -D @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-operations dotenv`
5. Create your queries in a queries.gql file (or multiple gql files - however you want to organize).
6. Add this to package.json npm scripts `gql-codegen": "gql-codegen -r dotenv/config`
7. Create the `codegen.yml` file. This file will link to your Fauna database secret (add to a .env file). This file will have a `documents` attribute in it which says what queries it's going to document (queries.gql).
8. Run `npm run gql-codegen`. This will generate a typescript file that has function definitions for the queries (from queries.gql) and type definitions for what they take in/ output.
9. Query Fauna with the functions codegen created.
