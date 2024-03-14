# ZKMF2024 Website

## Deployment

The website is deployed using Netlify.  
[![Netlify Status](https://api.netlify.com/api/v1/badges/6a65a5bd-5325-47e7-9a04-6155ca6d56eb/deploy-status)](https://app.netlify.com/sites/zkmf2024-screens/deploys)

### Build settings

* Build command: `npm run generate`
* Publish directory: `dist`

### Environment variables

* "Add a single variable"
    * `API_BASE`

For local development add a `.env` file in root folder looking like this:

```properties
API_BASE=<EITHER LOCALHOST OR TESTSERVER URL>
```
