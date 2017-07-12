import { MitoWebAppPage } from './app.po';

describe('mito-web-app App', () => {
  let page: MitoWebAppPage;

  beforeEach(() => {
    page = new MitoWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
