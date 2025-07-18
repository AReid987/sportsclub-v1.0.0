'use client';

import { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import '../globals.css';
import Sidebar from '../../src/components/Sidebar.tsx';
import BottomAppBar from '../../src/components/BottomAppBar.tsx';
import useWindowSize from '../../hooks/useWindowSize.js';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const size = useWindowSize();
  const isMobile = size ? size.width < 640 : false;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {isClient && !isMobile && <Sidebar />}
          <div
            id="main-content"
            style={{
              marginLeft: isClient && !isMobile ? '240px' : '0',
              flex: 1,
              transition: 'margin-left 0.3s ease',
              paddingBottom: isClient && isMobile ? '80px' : '0',
            }}
          >
            {children}
          </div>
          {isClient && isMobile && <BottomAppBar />}
        </div>
      </body>
    </html>
  );
}
