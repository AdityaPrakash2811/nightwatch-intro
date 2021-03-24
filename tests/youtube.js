module.exports = {

    '@tags': ['youtube'],
    'Youtube Test' (browser) {

       const searchQuerySelector = 'input[id="search"]'
       const searchInput = 'GeekyAnts'

       const searchBtn = 'button[id="search-icon-legacy"]'

       const testText = 'span[id="title"][class="style-scope ytd-shelf-renderer"]'
       const channelImg = 'div[id="content-section"][class="style-scope ytd-channel-renderer"]'

       const video = 'div[id="meta"][class="style-scope ytd-grid-video-renderer"]'

       //Youtube Home Page
        browser
            .url('https://www.youtube.com/')
            .setValue(searchQuerySelector, searchInput)
            .click(searchBtn)

        //Check result of search
        browser.assert.containsText(testText, 'Latest from GeekyAnts','Message is present') 

        browser.click(channelImg) //to go to channel official page

        //Channel's official page
        browser.click(video) //select a video

        //Check url of video
        browser.assert.urlEquals('https://www.youtube.com/watch?v=vVTP-LNVeCI','correct url')
            
        browser.saveScreenshot('tests_output/output.png')
    }
} 