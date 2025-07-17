'use client';

type SidebarProps = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

export default function Sidebar({
  isCollapsed,
  toggleSidebar,
}: SidebarProps) {
  const navItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '🏆', label: 'Leaderboard', active: false },
    { icon: '🎯', label: 'Predictions', active: false },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '👥', label: 'Community', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ];

  return (
    <div
      className={`
        bg-gray-900 border-r border-gray-700 transition-all duration-300 ease-in-out
        fixed h-full z-50 overflow-y-auto flex flex-col
        ${isCollapsed ? 'w-16' : 'w-60'}
      `}
    >
      <div
        className={`
          p-4 flex flex-col
          ${isCollapsed ? 'items-center' : 'items-start'}
        `}
      >
        {/* Logo */}
        <div
          className={`
            flex items-center mb-8 mt-6
            ${isCollapsed ? 'justify-center' : 'px-4'}
          `}
        >
          <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center text-lg">
            🏆
          </div>
          {!isCollapsed && (
            <span className="text-white text-lg font-bold ml-3">
              Sportsclub
            </span>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 w-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`
                flex items-center rounded-lg transition-all duration-200
                text-sm font-medium no-underline h-10
                ${
                  isCollapsed ? 'justify-center w-12' : 'px-4'
                }
                ${
                  item.active
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={toggleSidebar}
          className={`
            absolute bottom-4 left-4 right-auto
            bg-gray-800 border border-gray-600 rounded-lg p-2
            text-gray-400 cursor-pointer text-lg
            hover:bg-gray-700 hover:text-white transition-all duration-200
            ${isCollapsed ? 'w-8' : ''}
          `}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
    </div>
  );
}
