import { Outlet } from 'react-router-dom'
import { Sidebar, BottomNav } from '../components/Navigation'
import TopBar from '../components/TopBar'
import { Drawer } from '../components/ui'
import { useState } from 'react'

export default function DashboardLayout() {
  const [search, setSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar search={search} setSearch={setSearch} onOpenDrawer={() => setDrawerOpen(true)} />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 pb-28 lg:px-6">
            <Outlet context={{ search }} />
          </main>
        </div>
      </div>
      <BottomNav />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Navigation">
        <Sidebar />
      </Drawer>
    </div>
  )
}
