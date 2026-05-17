// src/app/components/section/Services.tsx
import {
  FiPieChart,
  FiBriefcase,
  FiGlobe,
  FiCreditCard,
  FiShield,
  FiHome,
} from "react-icons/fi";

const services = [
  {
    icon: FiHome,
    title: "Personal Banking",
    desc: "Premium checking, high-yield savings, and custom credit solutions tailored to your goals.",
  },
  {
    icon: FiBriefcase,
    title: "Business Banking",
    desc: "From startups to enterprises: dedicated accounts, treasury services, and SBA loans.",
  },
  {
    icon: FiPieChart,
    title: "Wealth Management",
    desc: "Comprehensive planning, investment portfolios, and trust services from certified advisors.",
  },
  {
    icon: FiGlobe,
    title: "Global Transfers",
    desc: "Instant international wires with competitive FX rates and zero hidden fees.",
  },
  {
    icon: FiCreditCard,
    title: "Stellar Card",
    desc: "Premium metal card with unlimited cashback, travel perks, and concierge service.",
  },
  {
    icon: FiShield,
    title: "Digital Vault",
    desc: "Bank‑grade encrypted storage for documents, crypto assets, and digital inheritance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Ecosystem
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Banking, evolved.
          </h2>
          <p className="mt-4 text-gray-600">
            From daily spending to generational wealth, Stellar provides a
            unified financial command center.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <service.icon className="h-10 w-10 text-primary-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm text-primary-500">Learn more →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
