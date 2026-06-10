import { Link } from 'react-router-dom'
import { GlassButton } from '../components/ui'

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-teal-300">Reset password</p>
        <h1 className="mt-3 font-display text-4xl text-white">Recover access</h1>
        <p className="mt-3 text-sm text-slate-300">We’ll send a password reset link to your email.</p>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email" />
          <GlassButton className="w-full">Send reset link</GlassButton>
        </div>
        <div className="mt-4 text-sm text-slate-300">
          <Link to="/login" className="text-white">Back to login</Link>
        </div>
      </div>
    </div>
  )
}
