// src/app/components/section/Testimonials.tsx
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "CFO, NexGen Robotics",
    text: "Stellar's treasury APIs reduced our cross-border payment costs by 62% while providing real-time visibility. Game-changing.",
  },
  {
    name: "Marcus Thorne",
    role: "Private Client",
    text: "The wealth management team structured a legacy portfolio that outperformed benchmarks by 14% last year. Exceptional service.",
  },
  {
    name: "Elena Vasquez",
    role: "Small Business Owner",
    text: "From payroll to merchant services, everything is seamless. The mobile app is light‑years ahead of traditional banks.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What clients say</h2>
          <p className="text-gray-600 mt-2">
            Trusted by industry leaders worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-md">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-4 text-gray-700 italic">"{t.text}"</p>
              <div className="mt-6 font-semibold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
