import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight, Bell, ChevronRight, Mic, Search, Sparkles, Star, Wand2, X } from 'lucide-react'
import { cx, formatCurrency } from '../utils/helpers'

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-6 text-slate-300">{description}</p> : null}
    </div>
  )
}

export function GlassButton({ children, className, icon: Icon, variant = 'primary', ...props }) {
  const styles = {
    primary: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20',
    muted: 'bg-white/6 text-white border border-white/10 hover:bg-white/10',
    danger: 'bg-gradient-to-r from-rose-500 to-red-600 text-white',
  }
  return (
    <button
      className={cx(
        'focus-ring inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5',
        styles[variant],
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  )
}

export function StatCard({ label, value, delta }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-4">
        <p className="font-display text-3xl font-semibold text-white">{value}</p>
        {delta ? <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-300">{delta}</span> : null}
      </div>
    </motion.div>
  )
}

export function SearchBar({ value, onChange, placeholder = 'Search medicines, pharmacies, symptoms...' }) {
  return (
    <div className="glass flex items-center gap-3 rounded-3xl px-4 py-3">
      <Search className="h-5 w-5 text-emerald-300" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
      />
      <button className="focus-ring rounded-2xl bg-white/8 p-2 text-slate-300 transition hover:bg-white/12">
        <Mic className="h-4 w-4" />
      </button>
    </div>
  )
}

export function RankingBadge({ score }) {
  const tone = score > 94 ? 'from-emerald-400 to-cyan-400' : score > 88 ? 'from-cyan-400 to-sky-400' : 'from-amber-400 to-orange-400'
  return <span className={cx('rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-slate-950', tone)}>{score} score</span>
}

export function AvailabilityIndicator({ status }) {
  const isOpen = /open|24\/7/i.test(status)
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
        isOpen ? 'bg-emerald-400/10 text-emerald-300' : 'bg-slate-400/10 text-slate-300',
      )}
    >
      <span className={cx('h-2 w-2 rounded-full', isOpen ? 'bg-emerald-400' : 'bg-slate-400')} />
      {status}
    </span>
  )
}

export function SavingsWidget({ original, alternative }) {
  const savings = original - alternative
  return (
    <div className="glass rounded-3xl p-5">
      <p className="text-sm text-slate-400">Estimated savings</p>
      <p className="mt-3 font-display text-4xl text-white">{formatCurrency(savings)}</p>
      <p className="mt-2 text-sm text-slate-300">Compared with the original branded option.</p>
    </div>
  )
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="glass rounded-3xl p-8 text-center">
      <AlertCircle className="mx-auto h-8 w-8 text-teal-300" />
      <h3 className="mt-4 font-display text-2xl text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  )
}

export function ErrorState({ title = 'Something went wrong', description = 'Try again in a moment.' }) {
  return (
    <div className="glass rounded-3xl p-8 text-center">
      <X className="mx-auto h-8 w-8 text-rose-300" />
      <h3 className="mt-4 font-display text-2xl text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  )
}

export function Modal({ open, title, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4">
      <div className="glass max-h-[85vh] w-full max-w-2xl overflow-auto rounded-[2rem] p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl text-white">{title}</h3>
          <button onClick={onClose} className="rounded-full bg-white/8 p-2 text-slate-200">
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function Drawer({ open, title, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60">
      <div className="absolute right-0 top-0 h-full w-full max-w-md glass p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-white">{title}</h3>
          <button onClick={onClose} className="rounded-full bg-white/8 p-2 text-slate-200">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}

export function FilterPanel({ filters, setFilters }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <Wand2 className="h-4 w-4 text-teal-300" />
        Smart filters
      </div>
      <div className="mt-4 grid gap-3">
        {filters.map((filter) => (
          <label key={filter.key} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-200">
            <span>{filter.label}</span>
            <input
              type="checkbox"
              checked={filter.enabled}
              onChange={(event) => setFilters((current) => current.map((item) => item.key === filter.key ? { ...item, enabled: event.target.checked } : item))}
            />
          </label>
        ))}
      </div>
    </div>
  )
}

export function FloatingButton({ children, ...props }) {
  return (
    <button className="fixed bottom-20 right-5 z-40 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 text-slate-950 shadow-2xl shadow-emerald-500/30 md:hidden" {...props}>
      {children}
    </button>
  )
}

export function ThemeToggle({ dark, onToggle }) {
  return (
    <button onClick={onToggle} className="focus-ring rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white">
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}

export function IconTextButton({ icon: Icon, children, ...props }) {
  return (
    <button className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-2 text-sm text-white transition hover:bg-white/12" {...props}>
      <Icon className="h-4 w-4" />
      {children}
    </button>
  )
}

export function TrailCard({ title, subtitle, icon: Icon, action }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            {Icon ? <Icon className="h-5 w-5 text-emerald-300" /> : null}
            <h3 className="font-display text-xl text-white">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      {action ? <div className="mt-5">{action}</div> : null}
    </motion.div>
  )
}

export { ArrowRight, Bell, ChevronRight, Search, Sparkles, Star }
