/*
 * Copyright (c) Markus Schmidgall 2021
 * Portfolio Projekt um Angular von Grund auf zu lernen
 */

import {browser, by, element} from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
