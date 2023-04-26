# cypress-basics-js  [![Action status][ci-badge]][ci-workflow] [![cypress][cloud-badge]][cloud-project]
Basic repository to learn cypress features.

## Includes
- Github Actions workflow to run Cypress Tests
- Configuration for linting and editing in vscode
- Examples from initial project creation (1-getting-started and 2-advanced-examples)
- My own tests organizing code into tests, actions, lean page objects (cypress\e2e\integration)
- Wrappers for Cypress commands and assertions
- PENDING How to debug tests from vscode.

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