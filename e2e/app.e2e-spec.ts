import { QuizBuilderPage } from './app.po';

describe('quiz-builder App', function() {
  let page: QuizBuilderPage;

  beforeEach(() => {
    page = new QuizBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
