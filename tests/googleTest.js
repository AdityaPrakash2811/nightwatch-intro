module.exports = {

    '@tags': ['googleTest'],
    '@disabled': true,      // added for travis remove it if needed
    'Google Test' (browser) {

        const inputQuerySelector = 'input[name="as_q"]'
        const inputString = 'GeekyAnts'

        const dropDownLangSelector = '#lr_button'
        const langSelector = '.goog-menuitem[value="lang_en"]'

        const dropDownRegSelector = '#cr_button'
        const regionSelector = '.goog-menuitem[value="countryIN"]'

        const submitBtn = '.jfk-button[type="submit"]'

        //const result = `#searchform input[name="q"][value="${inputString}"]`
        const result = 'input[name="q"]'

        browser
            .url('https://www.google.co.in/advanced_search')
            .setValue(inputQuerySelector, inputString)
            .click(dropDownLangSelector)
            .click(langSelector)
            .click(dropDownRegSelector)
            .click(regionSelector)
            .click(submitBtn)

        browser.assert.visible(result)

        browser.assert.valueContains(result, inputString)
            
        browser.saveScreenshot('tests_output/output.png')
    }
} 