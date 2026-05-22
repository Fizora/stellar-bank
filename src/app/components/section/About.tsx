// src/app/components/section/About.tsx
import {
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiAward,
} from "react-icons/fi";

const stats = [
  {
    value: "Since 2021",
    label: "Serving clients with modern banking",
    icon: FiTrendingUp,
  },
  { value: "500k+", label: "Clients supported across segments", icon: FiUsers },
  { value: "24/7", label: "Digital banking access", icon: FiShield },
  {
    value: "100%",
    label: "Commitment to security and compliance",
    icon: FiAward,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A modern bank with a
              <span className="text-primary-600"> disciplined approach</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded to combine reliable banking foundations with a modern
              digital experience, we focus on helping customers manage everyday
              finances, grow businesses, and plan for the future.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>
                  Built around security, privacy, and operational resilience.
                </span>
              </div>
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>
                  Designed for personal, business, and wealth management needs.
                </span>
              </div>
              <div className="flex gap-3">
                <FiCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span>
                  Focused on transparent service and long-term client
                  relationships.
                </span>
              </div>
            </div>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              Learn about our mission →
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
