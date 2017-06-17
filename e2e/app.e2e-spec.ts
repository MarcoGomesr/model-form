import { ModelFormPage } from './app.po';

describe('model-form App', () => {
  let page: ModelFormPage;

  beforeEach(() => {
    page = new ModelFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
