'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 8px grid-based widths
  // Collapsed: 16px (left margin) + 16px (icon) + 16px (right margin) = 48px
  // Expanded: 16px (left margin) + 16px (icon) + 8px (gap) + 104px (text) + 16px (right margin) = 160px
  const collapsedWidth = 48; // 6 * 8px
  const expandedWidth = 160; // 20 * 8px

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);

    // Update main content margin
    const mainContent = document.getElementById('main-content') as HTMLElement;
    if (mainContent) {
      mainContent.style.marginLeft = newCollapsedState ? `${collapsedWidth}px` : `${expandedWidth}px`;
    }
  };

  return (
    <div
      className={`
        fixed h-screen z-[1000] overflow-y-auto
        bg-slate-900 border-r border-slate-600
        transition-all duration-300 ease-in-out
        flex flex-col
      `}
      style={{
        width: isCollapsed ? `${collapsedWidth}px` : `${expandedWidth}px`,
      }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className={`
          flex items-center mb-8 mt-6
          ${isCollapsed ? 'justify-center px-4' : 'px-4'}
        `}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center text-sm">
            🏆
          </div>
          {!isCollapsed && (
            <span className="ml-2 text-slate-100 text-sm font-bold whitespace-nowrap">
              Sportsclub
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 px-4">
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
              className={`
                flex items-center rounded-lg transition-all duration-200
                text-sm font-medium no-underline
                ${isCollapsed ? 'justify-center w-4 h-8' : 'h-10 px-4'}
                ${item.active 
                  ? 'bg-blue-700 text-slate-100' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                }
              `}
            >
              <span className="text-sm leading-none w-4 h-4 flex items-center justify-center">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-2 whitespace-nowrap">{item.label}</span>
              )}
            </a>
          ))}
        </nav>

        {/* Spacer to push toggle button to bottom */}
        <div className="flex-1" />

        {/* Collapse Toggle */}
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className={`
              bg-slate-800 border border-slate-600 rounded-lg
              text-slate-400 cursor-pointer transition-all duration-200
              hover:bg-slate-700 hover:text-slate-100
              ${isCollapsed ? 'w-8 h-8 flex items-center justify-center' : 'w-full py-2 px-3'}
            `}
          >
            <span className="text-base leading-none">
              {isCollapsed ? '→' : '←'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
