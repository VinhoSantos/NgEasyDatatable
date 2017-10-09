import { NgDatatablePage } from './app.po';

describe('ng-datatable App', () => {
  let page: NgDatatablePage;

  beforeEach(() => {
    page = new NgDatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
