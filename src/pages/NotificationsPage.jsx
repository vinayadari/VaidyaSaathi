import { BellRing, IndianRupee, TriangleAlert, Volume2 } from 'lucide-react'
import { RecommendationCard } from '../components/Card'

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Notifications</h1>
        <p className="mt-2 text-sm text-slate-300">Availability, alerts, price drops, and recommendation updates.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <RecommendationCard title="Availability" description="Paracetamol is back in stock nearby." icon={BellRing} />
        <RecommendationCard title="Price drop" description="Cetirizine price fell by 12% this week." icon={IndianRupee} />
        <RecommendationCard title="Alert" description="One nearby pharmacy is low on inventory." icon={TriangleAlert} />
        <RecommendationCard title="Recommendation" description="Open 24/7 pharmacy has the best route score." icon={Volume2} />
      </div>
    </div>
  )
}
