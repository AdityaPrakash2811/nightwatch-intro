#nightwatch-intro

Nightwatch.js is an automated end-to-end testing framework for web applications and websites. It is written in Node.js and uses the W3C WebDriver API (formerly Selenium WebDriver) for interacting with various browsers.

This contains - 
- Basic Test Case
- Google Search Test Case
- Youtube Test Case
- Google Page Object Test Case (to make code reusable) 

Clone the repo - 
```
git clone https://github.com/AdityaPrakash2811/nightwatch-intro
```

Run following command - 
```
npm install
npm test 
```

To run only Google Test Case - 
```
npm test -- --tag googleTest
```

To run only Youtube Test Case - 
```
npm test -- --tag youtube
```

To run only Google Page Object Test Case - 
```
npm test -- --tag googlePOTest
```