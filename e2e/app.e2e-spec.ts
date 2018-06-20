import { NgEasyDatatablePage } from './app.po';

describe('ng-easy-datatable App', () => {
  let page: NgEasyDatatablePage;

  beforeEach(() => {
    page = new NgEasyDatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
