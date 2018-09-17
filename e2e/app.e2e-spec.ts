import { VideoAppPage } from './app.po';

describe('video-app App', () => {
  let page: VideoAppPage;

  beforeEach(() => {
    page = new VideoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
