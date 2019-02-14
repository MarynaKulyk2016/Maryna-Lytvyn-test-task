// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["./features/*.feature"],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: "http://computer-database.herokuapp.com/computers",

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: 'json:.tmp/results.json',
        require: [
            './step_definitions/*.step.ts',
            './hooks/hooks.ts'
        ]
    },

    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }
    ],
    // Enable TypeScript for the tests
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });

        browser.waitForAngularEnabled(false);
    }
};