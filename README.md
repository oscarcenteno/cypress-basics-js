# cypress-basics-js  [![Action status][ci-badge]][ci-workflow] [![cypress][cloud-badge]][cloud-project]
Basic repository to learn cypress features.

## Includes
- Github Actions workflow to run Cypress Tests (UI, REST API and DB)\
- Reporting integrated to Cypress cloud, EPAM Report Portal, and local mochawesome reports
- Configuration for linting and editing in vscode
- Examples from initial project creation (1-getting-started and 2-advanced-examples)
- My own tests organizing code into tests, actions, lean page objects (cypress\e2e\integration)
- Wrappers for Cypress commands and assertions
- Cypress Api library for having better reporting on API actions
- Cypress Steps library for creating steps reporting in Cypress runner
- Docker image for mysql database (cypress\e2e\integration\db) with initializing script and deployment in github actions workflow (cypress.yml)
- Environment vaiables configuration

## Usage

- Install nodejs and npm
- Install cypress
- Run `npm install`
- To run all tests: `npm run test:all`
- To run two own tests: `npm test` which are run on Github Actions workflow and reported in Cypress Cloud.

## Advantages
- Uses real browser (chrome, firefox, edge, electron)
- Visibility is taken into account
- Has access to all browser resources
- Very readable

## Limitations (permanent trade-offs)
- Tests can be written in JS only
- Can test a single browser at a time
- Does not support multiple superdomains in one test
 
## Features
- Automatically retries (default timeout of 4 seconds) commands or assertions, but not commands such as click or type
- Provides a wrapper for Sinon spy and stub.
- Provides a wrapper for  many jQuery commands

 ## Course
 - link: https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io
 - files: Ex_Files_JavaScript_Cypress_io.zip
https://github.com/oscarcenteno/cypress-basics-js/blob/main/.github/workflows/cypress.yml

## Important configuration

- jsconfig.json allows for checking the syntax of JS files
- cypress globals are imported into files by configuring in package.json:
```json
  "standard": {
    "globals": [ "describe", "it", "cy" ]
  }
```

- linting is done by "standard" and vscode settings should be configured as this:

```json
{
  "standard.workingDirectories": [],
  "standard.autoFixOnSave": true,
}
```

 <!-- badge links follow -->
[ci-badge]: https://github.com/oscarcenteno/cypress-basics-js/actions/workflows/cypress.yml/badge.svg?branch=main
[ci-workflow]: https://github.com/oscarcenteno/cypress-basics-js/actions/workflows/cypress.yml
[cloud-badge]: https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/x68pip/main&style=flat&logo=cypress
[cloud-project]: https://cloud.cypress.io/projects/x68pip/runs


## Configuring test runs

- ENV params: CLI, cypress.env.json, cypress.config.js
- CI run: cypress.yml


## Tip: Custom actions
Cypress runs inside the browser, which is the main difference compared to Selenium-based test automation. That means that Cypress can actually get access to a lot of what’s happening inside of our application.

i.e. clock, spies and stubs for calls to APIs

## Tip: Use cy.session 
- Login: https://filiphric.com/use-session-instead-of-login-page-object-in-cypress


## Tip: App actions to skip doing everything thorugh UI (example with Vue.js)
https://applitools.com/blog/page-objects-app-actions-cypress/

## Tip:  Use Cypress Plugin API
https://github.com/filiphric/cypress-plugin-api
You can now use cy.api() command. This command works exactly like cy.request() but in addition to calling your API, it will print our information about the API call in your Cypress runner.

## Tip: As Selectors use data-cy attributes

https://filiphric.com/how-to-structure-a-big-project-in-cypress

Do not outsource the addition of data-* selectors to developers.

## Tip: Use grep tags to filter tests runs

https://www.npmjs.com/package/@cypress/grep

## Cy Tasks

- For accessing database, here I'm using cy tasks. e2e/integration/db contains a Docker image (Dockerfile), the initialization sql that is done automatically when the Docker image is started, and the database tasks.
- Those tasks are configured in cypress.config.js and used in the test file db.cy.js. On that tests I delete, insert and select data.
- docker commands to run tests:

``` bash

npm run docker:build
npm run docker:run

```

- wait a few seconds before running the first test, since the database init should be ran first.

- For cleanup:

``` bash
npm run docker:stop
npm run docker:delete
docker logs my-mysql-container
```

