import { MockupAngular2Page } from './app.po';

describe('mockup-angular2 App', () => {
  let page: MockupAngular2Page;

  beforeEach(() => {
    page = new MockupAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
