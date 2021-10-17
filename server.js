const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://google.com');
    const searchBar = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input"));
    await searchBar.sendKeys("nodejs");
    await searchBar.sendKeys(Key.ENTER);
}

run();