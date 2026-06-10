import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center p-6 text-center text-white">
      <div className="glass max-w-md rounded-[2rem] p-8">
        <h1 className="font-display text-5xl">404</h1>
        <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-slate-950">
          Back home
        </Link>
      </div>
    </div>
  )
}
