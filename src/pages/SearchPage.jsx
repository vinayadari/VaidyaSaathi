import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, Navigation2, Radar, Search as SearchIcon } from 'lucide-react'
import { medicines, pharmacies } from '../data/mockData'
import { FilterPanel, SearchBar } from '../components/ui'
import { PharmacyCard, MedicineCard } from '../components/Card'

const initialFilters = [
  { key: 'distance', label: 'Distance', enabled: true },
  { key: 'price', label: 'Price', enabled: true },
  { key: 'availability', label: 'Availability', enabled: true },
  { key: 'generic', label: 'Generic alternatives', enabled: false },
  { key: 'open', label: 'Open pharmacies', enabled: true },
  { key: 'twentyfour', label: '24/7 pharmacies', enabled: false },
]

export default function SearchPage() {
  const [query, setQuery] = useState('paracetamol')
  const [filters, setFilters] = useState(initialFilters)
  const list = useMemo(() => {
    const term = query.toLowerCase()
    return pharmacies.filter((pharmacy) => pharmacy.name.toLowerCase().includes(term) || term.length < 2).slice(0, 5)
  }, [query])

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-4">
        <div className="glass rounded-[2rem] p-5">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <SearchIcon className="h-4 w-4 text-emerald-300" />
            Premium medicine search
          </div>
          <div className="mt-4">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white">Autocomplete</button>
            <button className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white">Voice search</button>
            <button className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white">Ranking</button>
          </div>
        </div>
        <FilterPanel filters={filters} setFilters={setFilters} />
        <div className="glass rounded-[2rem] p-5">
          <div className="flex items-center gap-2 text-sm text-slate-300"><Radar className="h-4 w-4 text-cyan-300" />Autocomplete suggestions</div>
          <div className="mt-4 grid gap-3">
            {medicines.slice(0, 3).map((medicine) => <MedicineCard key={medicine.id} medicine={medicine} />)}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-[2rem] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-white">Results</h2>
              <p className="mt-2 text-sm text-slate-300">Desktop layout combines results with map-style intelligence.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white">
              <Mic className="h-4 w-4" />
              Voice
            </button>
          </div>
          <div className="mt-5 grid gap-4">
            {list.map((pharmacy) => <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />)}
          </div>
        </div>
        <div className="glass rounded-[2rem] p-5">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Map preview</span>
            <span className="inline-flex items-center gap-2"><Navigation2 className="h-4 w-4 text-emerald-300" />Closest route prioritized</span>
          </div>
          <div className="mt-4 grid h-72 place-items-center rounded-[2rem] border border-dashed border-white/10 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.22),_transparent_42%),linear-gradient(160deg,rgba(15,23,42,0.95),rgba(8,15,30,0.95))]">
            <div className="text-center">
              <p className="font-display text-3xl text-white">Map placeholder</p>
              <p className="mt-2 text-sm text-slate-300">Pharmacy markers and heatmap overlays render here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
