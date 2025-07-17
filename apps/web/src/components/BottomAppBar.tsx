
'use client';

import { Home, Trophy, BarChart2, Users, MoreHorizontal } from 'lucide-react';

const BottomAppBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-900/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-around">
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
          <Home size={24} />
          <span className="text-xs font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
          <Trophy size={24} />
          <span className="text-xs font-medium">Leaderboard</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
          <BarChart2 size={24} />
          <span className="text-xs font-medium">Predictions</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
          <Users size={24} />
          <span className="text-xs font-medium">Community</span>
        </a>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-200">
          <MoreHorizontal size={24} />
          <span className="text-xs font-medium">More</span>
        </button>
      </div>
    </div>
  );
};

export default BottomAppBar;
