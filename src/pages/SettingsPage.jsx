export default function SettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass rounded-[2rem] p-6">
        <h1 className="font-display text-4xl text-white">Settings</h1>
        <p className="mt-2 text-sm text-slate-300">Theme, accessibility, language, privacy, and notification preferences.</p>
      </div>
      <div className="glass rounded-[2rem] p-6">
        <div className="space-y-3 text-sm text-slate-200">
          <Setting label="Theme" value="Dark / Light" />
          <Setting label="Language" value="English" />
          <Setting label="Accessibility" value="High contrast, keyboard ready" />
          <Setting label="Notifications" value="Availability, price drops, alerts" />
          <Setting label="Privacy" value="Minimal analytics sharing" />
        </div>
      </div>
    </div>
  )
}

function Setting({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
      <span>{label}</span>
      <span className="text-slate-300">{value}</span>
    </div>
  )
}
