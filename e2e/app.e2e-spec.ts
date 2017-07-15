import { ExpenseWatchPage } from './app.po';

describe('expense-watch App', () => {
  let page: ExpenseWatchPage;

  beforeEach(() => {
    page = new ExpenseWatchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
