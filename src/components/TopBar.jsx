import { Bell, Menu, Search, ShieldPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SearchBar, ThemeToggle } from './ui'
import { useTheme } from '../contexts/ThemeContext'
import { useEmergency } from '../contexts/EmergencyContext'

export default function TopBar({ search, setSearch, onOpenDrawer }) {
  const { theme, toggleTheme } = useTheme()
  const { emergencyMode, setEmergencyMode } = useEmergency()

  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-slate-950/45 backdrop-blur-xl">
      <div className="flex flex-col gap-3 px-4 py-4 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          <button onClick={onOpenDrawer} className="rounded-2xl bg-white/6 p-2 text-white xl:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 text-sm text-slate-300 md:flex">
            <Search className="h-4 w-4 text-emerald-300" />
            Find medicines nearby instantly
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/notifications" className="rounded-2xl bg-white/6 p-2 text-white">
              <Bell className="h-5 w-5" />
            </Link>
            <ThemeToggle dark={theme === 'dark'} onToggle={toggleTheme} />
            <button onClick={() => setEmergencyMode((current) => !current)} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-4 py-2 text-sm font-semibold text-white">
              <ShieldPlus className="h-4 w-4" />
              {emergencyMode ? 'Exit' : 'Emergency'}
            </button>
          </div>
        </div>
        <SearchBar value={search} onChange={setSearch} />
      </div>
    </header>
  )
}
