module.exports = {
    'First Test' (browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')   //visible means that it can be interacted with
            .assert.containsText(".hnname", "Hacker News")
    }
} 