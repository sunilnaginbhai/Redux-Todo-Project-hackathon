import React, { useContext } from 'react'
import { Inbox, Layers, Search, Info } from 'lucide-react'
import { MainContext } from '../contexts/MainContext'
import { NavLink } from 'react-router';

const Sidebar = () => {
  const { theme, setIsSearchOpen } = useContext(MainContext);

  return (
    <aside className={`w-64 border-r p-4 flex flex-col justify-between shrink-0 min-h-screen transition-colors ${theme.cardBg}`}>
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Layers className="w-5 h-5" />
          </div>
          <span className={`font-bold text-lg tracking-tight ${theme.textPrimary}`}>
            TaskFlow
          </span>
        </div>

        <button
          onClick={() => setIsSearchOpen(true)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors border ${theme.toggleBtn}`}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </div>
          <kbd className={`px-1.5 py-0.5 text-[10px] font-semibold border rounded ${theme.modalKbd}`}>Ctrl K</kbd>
        </button>

       <nav className="space-y-1">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
        isActive
          ? 'bg-blue-50/80 text-blue-700 border border-blue-200 shadow-xs shadow-blue-100'
          : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900 border border-transparent'
      }`
    }
  >
    <Inbox className="w-4 h-4" />
    <span>Inbox</span>
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
        isActive
          ? 'bg-blue-50/80 text-blue-700 border border-blue-200 shadow-xs shadow-blue-100'
          : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900 border border-transparent'
      }`
    }
  >
    <Info className="w-4 h-4" />
    <span>About</span>
  </NavLink>
</nav>
      </div>

      <div className={`px-2 py-3 rounded-lg text-xs ${theme.textMuted}`}>
        <p>From cohort 3.0</p>
      </div>
    </aside>
  )
}

export default Sidebar;