# testTask

## E2E

For tests development use two terminals, example:
 * One is for webdriver-manager to start `webdriver-manager start`
 * Another for running tests `npm test`
 
### Running specific features
#### By tag
`npm test -- --cucumberOpts.tags @login`
#### By scenario name
`npm test -- --cucumberOpts.name TC-1`
