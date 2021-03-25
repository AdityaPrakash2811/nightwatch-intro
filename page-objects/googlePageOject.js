module.exports = {
    url: 'https://www.google.co.in/advanced_search',

    elements: {
        inputQuerySelector : 'input[name="as_q"]',
        dropDownLangSelector : '#lr_button',
        dropDownRegSelector : '#cr_button',
        submitBtn : '.jfk-button[type="submit"]'
    },

    commands: [{

        searchText(selector, value){
            return this.setValue(selector,value)
        },

        setLanguage(selector, value){
            return this
                    .click(selector)
                    .click(`.goog-menuitem[value="${value}"]`)
        },

        setRegion(selector, value){
            return this
                    .click(selector)
                    .click(`.goog-menuitem[value="${value}"]`)
        },

        submitSearch(selector){
            return this.click(selector)
        }

    }]
}