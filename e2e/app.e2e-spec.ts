import { WebSocketEjemploPage } from './app.po';

describe('web-socket-ejemplo App', () => {
  let page: WebSocketEjemploPage;

  beforeEach(() => {
    page = new WebSocketEjemploPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
