import { ScoutmasterPage } from './app.po';

describe('scoutmaster App', () => {
  let page: ScoutmasterPage;

  beforeEach(() => {
    page = new ScoutmasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sm works!');
  });
});
