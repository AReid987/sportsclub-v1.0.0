'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import './globals.css';
import Sidebar from '../src/components/Sidebar.tsx';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <div
            id="main-content"
            style={{
              marginLeft: isCollapsed ? '64px' : '240px',
              flex: 1,
              transition: 'margin-left 0.3s ease',
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
