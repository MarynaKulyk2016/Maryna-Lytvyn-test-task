# Test project

To make sure everything works in this initial repo:

* clone
* run `npm install` in root of this repo

For tests development use two terminals, example:
 * One is for webdriver-manager to start `webdriver-manager start`
 * Another for running tests `npm test`
 
### Running specific scenarios
#### By tag
`npm test -- --cucumberOpts.tags @login`
#### By scenario name
`npm test -- --cucumberOpts.name TC-01`

### HTML report
HTML report link is generated after each test execution:

* Copy the link from terminal and open it in any browser

