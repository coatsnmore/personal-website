import { AngularMapPage } from './app.po';

describe('angular-map App', () => {
  let page: AngularMapPage;

  beforeEach(() => {
    page = new AngularMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
