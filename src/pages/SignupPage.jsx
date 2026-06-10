import { Link } from 'react-router-dom'
import { GlassButton } from '../components/ui'

export default function SignupPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden lg:block bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.22),_transparent_35%),linear-gradient(160deg,#08111f,#111827)]" />
      <div className="flex items-center justify-center p-6">
        <div className="glass w-full max-w-md rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Create account</p>
          <h1 className="mt-3 font-display text-4xl text-white">Start saving time</h1>
          <div className="mt-8 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Full name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Password" type="password" />
            <GlassButton className="w-full">Sign up</GlassButton>
          </div>
          <div className="mt-4 text-sm text-slate-300">
            Already have an account? <Link to="/login" className="text-white">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
