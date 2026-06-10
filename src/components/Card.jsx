import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Pill, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cx, formatCurrency } from '../utils/helpers'
import { AvailabilityIndicator, RankingBadge } from './ui'

export function PharmacyCard({ pharmacy, compact = false }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to={`/pharmacy/${pharmacy.id}`} className="font-display text-xl text-white">
            {pharmacy.name}
          </Link>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="h-4 w-4 text-teal-300" />
            {pharmacy.address}
          </div>
        </div>
        <RankingBadge score={pharmacy.score} />
      </div>
      <div className={cx('mt-4 grid gap-3', compact ? 'grid-cols-2' : 'grid-cols-4')}>
        <Metric label="Distance" value={pharmacy.distance} />
        <Metric label="ETA" value={pharmacy.eta} />
        <Metric label="Rating" value={pharmacy.rating.toFixed(1)} />
        <Metric label="Stock" value={pharmacy.stock} />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <AvailabilityIndicator status={pharmacy.open} />
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Pill className="h-4 w-4 text-emerald-300" />
          Price: {pharmacy.price}
        </div>
      </div>
      {!compact ? (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-slate-400">Recommendation score</p>
          <p className="font-semibold text-white">{pharmacy.score}%</p>
        </div>
      ) : null}
    </motion.div>
  )
}

export function MedicineCard({ medicine }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to={`/medicine/${medicine.id}`} className="font-display text-xl text-white">
            {medicine.name}
          </Link>
          <p className="mt-2 text-sm text-slate-300">{medicine.category}</p>
        </div>
        <RankingBadge score={medicine.score} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">Estimated price</p>
        <p className="font-semibold text-white">{formatCurrency(medicine.price)}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-slate-400">Availability</p>
        <p className="text-sm font-medium text-emerald-300">{medicine.availability}%</p>
      </div>
    </motion.div>
  )
}

export function RecommendationCard({ title, description, icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-3">
            {Icon ? <Icon className="h-5 w-5 text-cyan-300" /> : null}
          </div>
          <div>
            <h3 className="font-display text-lg text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">{description}</p>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-400" />
      </div>
    </motion.div>
  )
}

export function AnalyticsCard({ title, value, subtitle }) {
  return (
    <div className="glass rounded-3xl p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 font-display text-3xl text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
    </div>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  )
}
