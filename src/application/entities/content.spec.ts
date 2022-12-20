import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able to crate a notification content', () => {
    const content = new Content('Você recebeu uma notificação.');

    expect(content).toBeTruthy();
  });

  it('shoud not be able to create a notification with less then 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('shoud not be able to create a notification with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
