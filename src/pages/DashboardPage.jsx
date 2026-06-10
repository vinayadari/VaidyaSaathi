import { useOutletContext, Link } from 'react-router-dom'
import { Activity, Bell, MapPin, Pill, Search, ShieldCheck, Sparkles, TimerReset } from 'lucide-react'
import { medicines, pharmacies } from '../data/mockData'
import { AnalyticsCard, MedicineCard, PharmacyCard, RecommendationCard } from '../components/Card'

export default function DashboardPage() {
  useOutletContext()
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 xl:grid-cols-4">
        <AnalyticsCard title="Nearby pharmacies" value={pharmacies.length} subtitle="Actively ranked by distance and stock." />
        <AnalyticsCard title="Recent searches" value="18" subtitle="Last 7 days across web and mobile." />
        <AnalyticsCard title="Trending medicines" value={medicines.length} subtitle="High signal, high demand products." />
        <AnalyticsCard title="Savings found" value="₹2,340" subtitle="Alternative recommendations surfaced." />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-4">
          <div className="glass rounded-[2rem] p-6">
            <h2 className="font-display text-2xl text-white">Recommended matches</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {pharmacies.slice(0, 2).map((pharmacy) => <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} compact />)}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <MedicineCard medicine={medicines[0]} />
            <MedicineCard medicine={medicines[4]} />
          </div>
        </div>
        <div className="space-y-4">
          <RecommendationCard title="Fastest recommendation" description="Open now, high stock, and closest distance." icon={TimerReset} />
          <RecommendationCard title="Stock confidence" description="Inventory availability is high for core chronic care products." icon={ShieldCheck} />
          <RecommendationCard title="Search support" description="Keyboard first search with voice placeholder and quick filters." icon={Search} />
          <Link to="/search" className="block rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 text-slate-950">
            <p className="font-display text-2xl">Start a new search</p>
            <p className="mt-2 text-sm font-medium">Find the best medicine and nearest pharmacy.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
