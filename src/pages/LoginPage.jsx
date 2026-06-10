import { Link } from 'react-router-dom'
import { GlassButton } from '../components/ui'

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.18),_transparent_30%),linear-gradient(160deg,#08111f,#111827)]" />
      <div className="flex items-center justify-center p-6">
        <div className="glass w-full max-w-md rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Sign in</p>
          <h1 className="mt-3 font-display text-4xl text-white">Welcome back</h1>
          <div className="mt-8 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Password" type="password" />
            <GlassButton className="w-full">Login</GlassButton>
          </div>
          <div className="mt-4 flex justify-between text-sm text-slate-300">
            <Link to="/forgot-password">Forgot password</Link>
            <Link to="/signup">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
