import { useEmergency } from '../contexts/EmergencyContext'
import { GlassButton } from '../components/ui'
import { pharmacies } from '../data/mockData'

export default function EmergencyPage() {
  const { emergencyMode, setEmergencyMode } = useEmergency()

  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Emergency mode</h1>
        <p className="mt-2 text-sm text-slate-300">Minimal layout, red theme, larger buttons, nearest pharmacy first.</p>
      </div>
      <div className="glass rounded-[2rem] p-6">
        <GlassButton variant="danger" onClick={() => setEmergencyMode(!emergencyMode)}>
          {emergencyMode ? 'Disable emergency mode' : 'Enable emergency mode'}
        </GlassButton>
        <div className="mt-6 space-y-3">
          {pharmacies.slice(0, 2).map((pharmacy) => (
            <div key={pharmacy.id} className="rounded-2xl bg-rose-500/10 px-4 py-4 text-white">
              {pharmacy.name} - {pharmacy.distance}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
