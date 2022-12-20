import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('shoud be able to create a notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      category: 'social',
      content: new Content('Você recebeu uma notificação.'),
    });

    expect(notification).toBeTruthy();
  });
});
