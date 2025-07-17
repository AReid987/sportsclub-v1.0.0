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

export const metadata = {
  title: 'Sportsclub - Play Smart. Win Big.',
  description:
    'Transform your sports predictions with AI-powered insights. Join 50,000+ players in skill-based sports gaming with real prizes. Start your free trial today!',
  keywords:
    'sports predictions, AI insights, sports betting, fantasy sports, data-driven betting, sports analytics',
  openGraph: {
    title: 'Sportsclub - Play Smart. Win Big.',
    description:
      'Transform your sports predictions with AI-powered insights. Join 50,000+ players in skill-based sports gaming with real prizes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <div
            id="main-content"
            style={{
              marginLeft: '160px', // Updated to match expanded width (20 * 8px)
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
