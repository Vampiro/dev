---
id: auth0
title: Auth0
---

This rough "guide" assumes you've already gone through setting up an account with Auth0.

- Create a Tenant (multiple apps can live under one "Tenant"): Top left -> Create Tenant
- Create an App: Left-hand menu -> Applications -> + Create Application -> SPA (if that's what you're making)
  - Within the Application settings, you'll have to set:
    - Allowed Callback URLs: Where the user is allowed to be sent after authenticating, ex: `http://localhost:3000`
    - Allowed logout URLs: Where the user is allowed to be sent after logging out, ex: `http://localhost:3000`
    - Allowed Web Origins: Where you're going to be contacting Auth0 from. ex: `http://localhost:3000`
- For a SPA that will end up calling backend services (an API), you'll need to define an API in Auth0. Applications -> APIs -> + Create API
  - There are instructions under "Quick Start" for how to deal with verifying the JWT on the server side. These instructions are for an Express app, but it works for koa as well (just use koa-jwt instead of express-jwt).
- Take down the following information:
  - From Auth0 Application: Client ID
  - From Auth0 Application: Domain
  - From Auth0 API: Audience (Identifier)
  - Location your API will reside. For development, this might just be http://localhost/api
- In your React project, in `.env`, put:

```bash
# obviously fill in your own values
REACT_APP_API_ORIGIN=http://location-of-api.com/api
REACT_APP_AUTH0_AUDIENCE=YOUR_AUDIENCE
REACT_APP_AUTH0_CLIENT_ID=YOUR_CLIENT_ID
REACT_APP_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
```

These will be set at dev/build time so ensure you fill in correct values at the various points in development/deployment.

- At this point in your React app, you can follow [these Auth0/React instructions](https://auth0.com/docs/quickstart/spa/react/01-login). Or, if you're Robbie, you can look at one of your React projects where you've implemented authentication with Auth0/React and copy the components out of there.
