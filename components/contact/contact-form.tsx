import NotificationContext from '@/store/notification-context';
import { ChangeEvent, FC, FormEvent, useContext, useEffect, useState } from 'react';
import Notification from '../ui/notification';

const ContactForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  useEffect(() => {
    const timer = setTimeout(() => {
      notificationCtx.hideNotification();
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeNotification]);

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showNotificationHandler();
    setEmail('');
    setName('');
    setMessage('');
  };

  const showNotificationHandler = () => {
    // setActiveNotification(notificationCtx.notification);
    notificationCtx.showNotification({
      title: 'Contact',
      message: 'Notification =)',
      status: message || 'pending',
    });
  };

  return (
    <section>
      <h1>Contact form</h1>
      <form onSubmit={handleSendMessage}>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
          </div>
        </div>
        <div>
          <label htmlFor="name">Message</label>
          <textarea rows={5} id="name" value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
        </div>
        <div>
          <button>Send message</button>
        </div>
        <div>
          <button onClick={activeNotification ? notificationCtx.hideNotification : showNotificationHandler}>Show notification</button>
        </div>
      </form>
      {activeNotification && (
        <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />
      )}
    </section>
  );
};

export default ContactForm;
