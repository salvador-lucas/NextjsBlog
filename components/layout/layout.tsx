import React, { FC, ReactNode } from 'react';
import MainHeader from './main-header';
import { NotificationContextProvider } from '@/store/notification-context';

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <NotificationContextProvider>
      <MainHeader />
      <main>{children}</main>
    </NotificationContextProvider>
  );
};

export default Layout;
