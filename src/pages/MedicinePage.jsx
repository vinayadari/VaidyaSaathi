import { useParams } from 'react-router-dom'
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { medicines, pharmacies } from '../data/mockData'
import { AnalyticsCard, PharmacyCard } from '../components/Card'

const chartData = [
  { name: 'Mon', price: 22, availability: 92 },
  { name: 'Tue', price: 25, availability: 90 },
  { name: 'Wed', price: 24, availability: 96 },
  { name: 'Thu', price: 28, availability: 88 },
  { name: 'Fri', price: 26, availability: 94 },
]

export default function MedicinePage() {
  const { id } = useParams()
  const medicine = medicines.find((item) => item.id === id) ?? medicines[0]

  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-teal-300">Medicine detail</p>
        <h1 className="mt-3 font-display text-4xl text-white">{medicine.name}</h1>
        <p className="mt-2 text-sm text-slate-300">{medicine.composition}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <AnalyticsCard title="Price" value={`₹${medicine.price}`} subtitle="Estimated retail price" />
        <AnalyticsCard title="Availability" value={`${medicine.availability}%`} subtitle="Nearby availability signal" />
        <AnalyticsCard title="Score" value={`${medicine.score}%`} subtitle="Recommendation confidence" />
        <AnalyticsCard title="Category" value={medicine.category} subtitle="Use case cluster" />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass rounded-[2rem] p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl text-white">Price comparison</h2>
            <p className="text-sm text-slate-300">7 day trend</p>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#10b981" fill="url(#price)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {medicine.generic.map((item) => (
              <div key={item} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">{item}</div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-[2rem] p-6">
            <h2 className="font-display text-2xl text-white">Medicine intelligence</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">Composition:</strong> {medicine.composition}</p>
              <p><strong className="text-white">Side effects:</strong> {medicine.sideEffects}</p>
              <p><strong className="text-white">Nearby availability:</strong> Strong within 2 km radius.</p>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <h3 className="font-display text-xl text-white">Nearby availability</h3>
            <div className="mt-4 space-y-4">
              {pharmacies.slice(0, 2).map((pharmacy) => <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} compact />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
