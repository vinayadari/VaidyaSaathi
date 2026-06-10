import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, MapPinned, ScanSearch, Sparkles, BadgeCheck, Radar, Activity, ShieldCheck } from 'lucide-react'
import { medicines, pharmacies, stats } from '../data/mockData'
import { GlassButton, SectionTitle, StatCard, TrailCard } from '../components/ui'
import { MedicineCard, PharmacyCard, RecommendationCard } from '../components/Card'

const features = [
  { title: 'Smart Search', description: 'Typo-tolerant lookup across medicine names, symptoms, and pharmacies.', icon: ScanSearch },
  { title: 'Intelligent Ranking', description: 'Recommendation scoring based on distance, stock, open status, and price.', icon: Brain },
  { title: 'Cost Optimization', description: 'Surface the best-value option and the closest in-stock alternative.', icon: Radar },
  { title: 'Nearby Discovery', description: 'Map-first view of the nearest pharmacy with live proximity cues.', icon: MapPinned },
  { title: 'Real-Time Availability', description: 'Availability glows turn red when stock is scarce and green when ready.', icon: Activity },
  { title: 'Duplicate Detection', description: 'Spot duplicate products and highlight better substitutions automatically.', icon: BadgeCheck },
  { title: 'Fast API Performance', description: 'Lean, cached data paths with instant page transitions and skeleton states.', icon: Sparkles },
  { title: 'Navigation Support', description: 'Keyboard accessible flow with mobile bottom navigation and touch-friendly actions.', icon: ShieldCheck },
]

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute right-8 top-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <header className="glass flex items-center justify-between rounded-[2rem] px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">VaidyaSaathi</p>
            <p className="font-display text-lg">Healthcare medicine discovery platform</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-slate-300">Login</Link>
            <Link to="/dashboard"><GlassButton icon={ArrowRight}>Open app</GlassButton></Link>
          </div>
        </header>

        <section className="grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
              Find medicines nearby instantly
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Find Medicines Nearby Instantly
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Discover nearby pharmacies, compare prices, check availability, and save money.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/search"><GlassButton>Search Medicines</GlassButton></Link>
              <Link to="/map"><GlassButton variant="muted">Explore Pharmacies</GlassButton></Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </div>
          </motion.div>

          <div className="relative min-h-[560px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-2xl" />
            <div className="relative grid gap-4">
              <TrailCard title="Trending medicine" subtitle="Paracetamol 650mg is the fastest matched product today." icon={Sparkles} />
              <div className="grid gap-4 md:grid-cols-2">
                <MedicineCard medicine={medicines[0]} />
                <PharmacyCard pharmacy={pharmacies[0]} compact />
              </div>
              <TrailCard title="AI recommendation" subtitle="MedPlus offers the best mix of price, proximity, and stock." icon={Radar} />
              <div className="grid gap-4 md:grid-cols-2">
                <RecommendationCard title="Best price match" description="Switch to generic alternatives and save on repeat purchases." icon={BadgeCheck} />
                <RecommendationCard title="Closest open pharmacy" description="Open now within 0.8 km with a strong stock confidence score." icon={MapPinned} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionTitle eyebrow="Features" title="Premium medicine discovery designed like a serious healthcare product." description="Every surface is focused on fast search, better ranking, and mobile-first decision making." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => <TrailCard key={feature.title} {...feature} />)}
          </div>
        </section>

        <section className="grid gap-4 py-12 lg:grid-cols-3">
          <div className="glass rounded-[2rem] p-6 lg:col-span-2">
            <SectionTitle eyebrow="Pharmacies" title="High-confidence nearby options" description="Recommendation-aware results with pricing and availability context." />
            <div className="mt-6 grid gap-4">
              {pharmacies.slice(0, 3).map((pharmacy) => <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />)}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <SectionTitle eyebrow="CTA" title="Ready to use on every screen." description="The layout is responsive, accessible, and motion-rich without feeling noisy." />
            <div className="mt-6 space-y-3">
              <Link to="/signup"><GlassButton className="w-full">Create account</GlassButton></Link>
              <Link to="/dashboard"><GlassButton className="w-full" variant="muted">Enter dashboard</GlassButton></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
