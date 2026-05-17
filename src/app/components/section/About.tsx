// src/app/components/section/About.tsx
import {
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiAward,
} from "react-icons/fi";

const stats = [
  { value: "$32B+", label: "Assets Under Management", icon: FiTrendingUp },
  { value: "500k+", label: "Active Clients", icon: FiUsers },
  { value: "99.99%", label: "Uptime SLA", icon: FiShield },
  { value: "0", label: "Security Breaches", icon: FiAward },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Redefining{" "}
              <span className="text-primary-600">Financial Excellence</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded in 2021 by former executives from Goldman Sachs and
              Stripe, Stellar Bank bridges the gap between traditional banking
              security and AI‑powered fintech velocity. Our mission: democratize
              institutional‑grade finance.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>Licensed in all 50 states + EU (EMI #SC8792)</span>
              </div>
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>Backed by Sequoia Capital & Andreessen Horowitz</span>
              </div>
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>4.9/5 Trustpilot rating from 15,000+ reviews</span>
              </div>
            </div>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              Our manifesto →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
              >
                <stat.icon className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
