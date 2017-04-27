import { browser, element, by } from 'protractor';

export class ScoutmasterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sm-root h1')).getText();
  }
}
