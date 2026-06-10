import { Bell, HeartPulse, LayoutDashboard, MapPinned, Search, Settings, ShieldAlert, UserCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cx } from '../utils/helpers'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/map', label: 'Map', icon: MapPinned },
  { to: '/analytics', label: 'Analytics', icon: HeartPulse },
  { to: '/notifications', label: 'Alerts', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/emergency', label: 'Emergency', icon: ShieldAlert },
  { to: '/profile', label: 'Profile', icon: UserCircle2 },
]

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/8 bg-slate-950/40 p-5 xl:block">
      <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-5">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">VaidyaSaathi</p>
        <h1 className="mt-3 font-display text-2xl text-white">Pharmacy intelligence</h1>
        <p className="mt-2 text-sm text-slate-300">Nearby discovery, pricing, alternatives, and emergency routing.</p>
      </div>
      <nav className="mt-6 space-y-1">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cx(
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/6 hover:text-white',
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-white/10 bg-slate-950/85 px-2 py-2 backdrop-blur-xl xl:hidden">
      {items.slice(0, 4).map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => cx('flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px]', isActive ? 'text-white' : 'text-slate-400')}>
          <Icon className="h-4 w-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
