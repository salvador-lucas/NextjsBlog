import { FC, ReactNode, createContext, useEffect, useState } from 'react';

interface NotificationData {
  title: string;
  message: string;
  status: string;
}

export interface NotificationCtx {
  notification: NotificationData | null;
  showNotification: (notification: NotificationData) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext({} as NotificationCtx);

export const NotificationContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState<NotificationData | null>(null);
  useEffect(() => {
    if (activeNotification) {
      const timer = setTimeout(() => hideNotification(), 2500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotification = (notification: NotificationData) => {
    setActiveNotification(notification);
  };
  const hideNotification = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>;
};

export default NotificationContext;
