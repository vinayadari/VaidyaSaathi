import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Modal, GlassButton } from '../components/ui'
import { AnalyticsCard } from '../components/Card'
import { pharmacies } from '../data/mockData'

export default function AdminPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Admin dashboard</h1>
        <p className="mt-2 text-sm text-slate-300">Pharmacy management, inventory monitoring, duplicate detection, and API metrics.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <AnalyticsCard title="Active pharmacies" value={pharmacies.length} subtitle="Managed in the network." />
        <AnalyticsCard title="Duplicate flags" value="3" subtitle="Potential overlap entries." />
        <AnalyticsCard title="API p95" value="248ms" subtitle="Healthy response window." />
        <AnalyticsCard title="Alerts" value="12" subtitle="Open system notifications." />
      </div>
      <div className="glass rounded-[2rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-white">Pharmacy management</h2>
          <GlassButton onClick={() => { setModalOpen(true); toast.success('Create pharmacy modal opened') }}>Add pharmacy</GlassButton>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Distance</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pharmacies.map((pharmacy) => (
                <tr key={pharmacy.id} className="border-t border-white/8">
                  <td className="px-4 py-3 text-white">{pharmacy.name}</td>
                  <td className="px-4 py-3 text-slate-300">{pharmacy.distance}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Online</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal open={modalOpen} title="Add pharmacy" onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Pharmacy name" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white" placeholder="Location" />
          <GlassButton className="w-full" onClick={() => setModalOpen(false)}>Save pharmacy</GlassButton>
        </div>
      </Modal>
    </div>
  )
}
