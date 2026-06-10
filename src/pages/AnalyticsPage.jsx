import { AreaChart, Area, BarChart, Bar, CartesianGrid, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { medicines } from '../data/mockData'
import { AnalyticsCard } from '../components/Card'

const searchTrend = [
  { day: 'Mon', value: 82 },
  { day: 'Tue', value: 91 },
  { day: 'Wed', value: 104 },
  { day: 'Thu', value: 98 },
  { day: 'Fri', value: 123 },
]
const availabilityTrend = [
  { day: 'Mon', value: 88 },
  { day: 'Tue', value: 86 },
  { day: 'Wed', value: 90 },
  { day: 'Thu', value: 93 },
  { day: 'Fri', value: 95 },
]
const satisfactionTrend = [
  { day: 'Mon', value: 4.1 },
  { day: 'Tue', value: 4.2 },
  { day: 'Wed', value: 4.3 },
  { day: 'Thu', value: 4.3 },
  { day: 'Fri', value: 4.4 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-5">
        <AnalyticsCard title="Search success" value="92.3%" subtitle="Matches returned per request." />
        <AnalyticsCard title="Response time" value="1.34s" subtitle="Average result generation." />
        <AnalyticsCard title="Active pharmacies" value="128" subtitle="Online partners and stores." />
        <AnalyticsCard title="Popular medicines" value={medicines.length} subtitle="High traffic medicines tracked." />
        <AnalyticsCard title="Cost savings" value="₹18k" subtitle="Alternative route savings." />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Search trends" data={searchTrend} type="line" />
        <ChartCard title="Availability trends" data={availabilityTrend} type="area" />
        <ChartCard title="Satisfaction trends" data={satisfactionTrend} type="line" />
        <div className="glass rounded-[2rem] p-6">
          <h2 className="font-display text-2xl text-white">Cost savings</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={searchTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChartCard({ title, data, type }) {
  return (
    <div className="glass rounded-[2rem] p-6">
      <h2 className="font-display text-2xl text-white">{title}</h2>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'area' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id={title} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Area dataKey="value" stroke="#14b8a6" fill={`url(#${title})`} strokeWidth={3} />
            </AreaChart>
          ) : (
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
