module.exports = {

    '@tags': ['googlePOTest'],
    'Google Page Object Test' (browser) {

        const inputString = 'GeekyAnts'
        const lang = 'lang_en'
        const region = 'countryIN'
        const result = 'input[name="q"]'

        const page = browser.page.googlePageOject()

        browser.url('https://www.google.co.in/advanced_search') //can use page.navigate() as well

        page
            .searchText('@inputQuerySelector', inputString)
            .setLanguage('@dropDownLangSelector', lang)
            .setRegion('@dropDownRegSelector', region)
            .submitSearch('@submitBtn')

        browser.assert.visible(result)

        browser.assert.valueContains(result, inputString)
            
        browser.saveScreenshot('tests_output/output.png')
    }
} 