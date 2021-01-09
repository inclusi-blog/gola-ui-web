import { detect } from 'detect-browser';

export default class AdditionalTagProvider {
  #tags;

  static browserFamily;

  static browserMajor;

  static browserOs;

  constructor() {
    this.#tags = {};
    AdditionalTagProvider.setBrowserInfo();
    this.setPageReferrer();
  }

  all() {
    this.#tags['BROWSER FAMILY'] = AdditionalTagProvider.browserFamily;
    this.#tags['BROWSER MAJOR'] = AdditionalTagProvider.browserMajor;
    // eslint-disable-next-line dot-notation
    this.#tags['session_tracing_id'] = sessionStorage.getItem('Session-Tracing-ID');
    this.#tags.OS = AdditionalTagProvider.browserOs;
    return this.#tags;
  }

  static setBrowserInfo() {
    if (AdditionalTagProvider.browserInfo !== undefined && AdditionalTagProvider.browserInfo !== '') {
      return;
    }
    const browser = detect();
    if (browser) {
      AdditionalTagProvider.browserFamily = browser.name;
      const [major] = browser.version.split('.');
      AdditionalTagProvider.browserMajor = major;
      AdditionalTagProvider.browserOs = browser.os;
    } else {
      AdditionalTagProvider.browserFamily = '';
      AdditionalTagProvider.browserMajor = '';
      AdditionalTagProvider.browserOs = '';
    }
  }

  setPageReferrer() {
    this.#tags['PAGE REFERRER'] = document.location.href;
  }
}
