import { useParams } from 'react-router-dom'
import { Phone, MapPin, Clock3, Star, Wallet, ShieldCheck } from 'lucide-react'
import { pharmacies } from '../data/mockData'
import { AnalyticsCard, MedicineCard, RecommendationCard } from '../components/Card'

export default function PharmacyPage() {
  const { id } = useParams()
  const pharmacy = pharmacies.find((item) => item.id === id) ?? pharmacies[0]

  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Pharmacy detail</p>
        <h1 className="mt-3 font-display text-4xl text-white">{pharmacy.name}</h1>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4" />{pharmacy.address}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <AnalyticsCard title="Distance" value={pharmacy.distance} subtitle="From your current area." />
        <AnalyticsCard title="Rating" value={pharmacy.rating.toFixed(1)} subtitle="User confidence score." />
        <AnalyticsCard title="ETA" value={pharmacy.eta} subtitle="Fastest delivery estimate." />
        <AnalyticsCard title="Stock" value={pharmacy.stock} subtitle="Current availability signal." />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="glass rounded-[2rem] p-6">
            <h2 className="font-display text-2xl text-white">Inventory table</h2>
            <div className="mt-4 space-y-3">
              <Row label="Paracetamol 650mg" value="In stock" />
              <Row label="Metformin" value="Low stock" />
              <Row label="Cetirizine" value="In stock" />
            </div>
          </div>
          <MedicineCard medicine={{ id: 'paracetamol-650mg', name: 'Paracetamol 650mg', category: 'Pain Relief', price: 28, score: 96, availability: 98 }} />
        </div>
        <div className="space-y-4">
          <RecommendationCard title="Sticky actions" description="Call, navigate, and reserve from the detail page." icon={ShieldCheck} />
          <div className="glass sticky top-32 rounded-[2rem] p-5">
            <p className="text-sm text-slate-300">Contact</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-300" />{pharmacy.phone}</div>
              <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-300" />{pharmacy.open}</div>
              <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-teal-300" />Price: {pharmacy.price}</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" />Rating: {pharmacy.rating}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
      <span className="text-sm text-slate-200">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  )
}
