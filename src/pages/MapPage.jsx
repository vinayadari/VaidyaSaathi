import { MapPinned, Route, Waves } from 'lucide-react'
import { pharmacies } from '../data/mockData'
import { RecommendationCard } from '../components/Card'

export default function MapPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_0.7fr]">
      <div className="space-y-4">
        <div className="glass rounded-[2rem] p-6">
          <div className="flex items-center gap-2 text-sm text-slate-300"><MapPinned className="h-4 w-4 text-cyan-300" />Google Maps style pharmacy surface</div>
          <div className="mt-4 grid h-[520px] place-items-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.22),_transparent_35%),radial-gradient(circle_at_70%_25%,_rgba(6,182,212,0.18),_transparent_18%),linear-gradient(160deg,rgba(8,15,30,0.96),rgba(15,23,42,0.96))]">
            <div className="text-center">
              <p className="font-display text-3xl text-white">Placeholder map</p>
              <p className="mt-2 text-sm text-slate-300">Markers, routes, and heatmaps render here.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <RecommendationCard title="Nearest route" description="Shortest travel time to open pharmacies." icon={Route} />
        <RecommendationCard title="Medicine heatmap" description="Demand density across nearby neighborhoods." icon={Waves} />
        <div className="glass rounded-[2rem] p-5">
          <h2 className="font-display text-2xl text-white">Recommended pharmacies</h2>
          <div className="mt-4 space-y-3">
            {pharmacies.slice(0, 4).map((pharmacy) => (
              <div key={pharmacy.id} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                {pharmacy.name} - {pharmacy.distance}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
