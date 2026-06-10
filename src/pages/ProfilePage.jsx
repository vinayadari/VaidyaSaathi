import { medicines, pharmacies } from '../data/mockData'
import { MedicineCard, PharmacyCard } from '../components/Card'

export default function ProfilePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Profile</h1>
        <p className="mt-3 text-sm text-slate-300">User information, saved pharmacies, alerts, and preferences.</p>
        <div className="mt-6 space-y-3 text-sm">
          <Field label="Name" value="Aarav Sharma" />
          <Field label="Location" value="Bengaluru, India" />
          <Field label="Membership" value="Premium" />
        </div>
      </div>
      <div className="space-y-4">
        <MedicineCard medicine={medicines[0]} />
        <PharmacyCard pharmacy={pharmacies[0]} />
      </div>
    </div>
  )
}

function Field({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/5 px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-white">{value}</p>
    </div>
  )
}
