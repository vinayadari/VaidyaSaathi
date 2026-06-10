import { Sparkles } from 'lucide-react'
import { medicines } from '../data/mockData'
import { SavingsWidget } from '../components/ui'
import { MedicineCard, RecommendationCard } from '../components/Card'

export default function AlternativesPage() {
  const original = medicines[1]
  const alternatives = medicines.filter((medicine) => medicine.id !== original.id)

  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Alternative medicines</h1>
        <p className="mt-2 text-sm text-slate-300">Original medicine, savings, composition match, and recommendation rationale.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass rounded-[2rem] p-5">
          <p className="text-sm text-slate-400">Original</p>
          <MedicineCard medicine={original} />
        </div>
        <SavingsWidget original={original.price} alternative={alternatives[0].price} />
        <RecommendationCard title="AI-style recommendation" description="Prefer the generic with strongest composition and price fit." icon={Sparkles} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {alternatives.map((medicine) => <MedicineCard key={medicine.id} medicine={medicine} />)}
      </div>
    </div>
  )
}
