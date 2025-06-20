import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

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
          {/* Sidebar Navigation */}
          <div
            id="sidebar"
            style={{
              width: '240px',
              background: '#0f172a',
              borderRight: '1px solid #334155',
              transition: 'width 0.3s ease',
              position: 'fixed',
              height: '100vh',
              zIndex: 1000,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '20px' }}>
              {/* Logo */}
              <div
                style={{
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}
                >
                  🏆
                </div>
                <span
                  style={{
                    color: '#f1f5f9',
                    fontSize: '18px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-geist-sans)',
                  }}
                >
                  Sportsclub
                </span>
              </div>

              {/* Navigation Links */}
              <nav
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                {[
                  { icon: '📊', label: 'Dashboard', active: true },
                  { icon: '🏆', label: 'Leaderboard', active: false },
                  { icon: '🎯', label: 'Predictions', active: false },
                  { icon: '📈', label: 'Analytics', active: false },
                  { icon: '👥', label: 'Community', active: false },
                  { icon: '⚙️', label: 'Settings', active: false },
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      color: item.active ? '#f1f5f9' : '#94a3b8',
                      background: item.active ? '#1e40af' : 'transparent',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: item.active ? '600' : '400',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.background = '#1e293b';
                        e.currentTarget.style.color = '#f1f5f9';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#94a3b8';
                      }
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </a>
                ))}
              </nav>

              {/* Collapse Toggle */}
              <button
                id="sidebar-toggle"
                onClick={() => {
                  const sidebar = document.getElementById('sidebar');
                  const mainContent = document.getElementById('main-content');
                  const labels = document.querySelectorAll('.nav-label');

                  if (sidebar && mainContent) {
                    const isCollapsed = sidebar.style.width === '64px';

                    if (isCollapsed) {
                      sidebar.style.width = '240px';
                      mainContent.style.marginLeft = '240px';
                      labels.forEach(
                        (label) =>
                          ((label as HTMLElement).style.display = 'block'),
                      );
                    } else {
                      sidebar.style.width = '64px';
                      mainContent.style.marginLeft = '64px';
                      labels.forEach(
                        (label) =>
                          ((label as HTMLElement).style.display = 'none'),
                      );
                    }
                  }
                }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  padding: '8px',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '18px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#334155';
                  e.currentTarget.style.color = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                ⟷
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div
            id="main-content"
            style={{
              marginLeft: '240px',
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
