'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Update main content margin
    const mainContent = document.querySelector(
      'div[style*="marginLeft"]',
    ) as HTMLElement;
    if (mainContent) {
      mainContent.style.marginLeft = isCollapsed ? '240px' : '64px';
    }
  };

  return (
    <div
      style={{
        width: isCollapsed ? '64px' : '240px',
        background: '#0f172a',
        borderRight: '1px solid #334155',
        transition: 'width 0.3s ease',
        position: 'fixed',
        height: '100vh',
        zIndex: 1000,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isCollapsed ? 'center' : 'flex-start',
          alignItems: isCollapsed ? 'center' : 'flex-start',
        }}
      >
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
          {!isCollapsed && (
            <span
              style={{
                color: '#f1f5f9',
                fontSize: '18px',
                fontWeight: '700',
              }}
            >
              Sportsclub
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
              {!isCollapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={toggleSidebar}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: isCollapsed ? 'auto' : '20px',
            width: isCollapsed ? '24px' : 'auto',
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
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
    </div>
  );
}
