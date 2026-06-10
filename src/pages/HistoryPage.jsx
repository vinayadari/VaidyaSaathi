import { medicines } from '../data/mockData'

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">History</h1>
        <p className="mt-2 text-sm text-slate-300">Recent searches, saved searches, and timeline activity.</p>
      </div>
      <div className="glass rounded-[2rem] p-6">
        <div className="space-y-4">
          {medicines.map((medicine, index) => (
            <div key={medicine.id} className="flex items-start gap-4 rounded-2xl border-l-2 border-emerald-400/60 bg-white/5 px-4 py-3">
              <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
              <div>
                <p className="font-semibold text-white">{medicine.name}</p>
                <p className="text-sm text-slate-300">Saved search {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
