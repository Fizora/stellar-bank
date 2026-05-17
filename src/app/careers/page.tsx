// src/app/careers/page.tsx
import { LucideCheckCircle2 } from "lucide-react";
import {
  LuGlobe,
  LuUsers,
  LuHeart,
  LuTrendingUp,
  LuRocket,
  LuCoffee,
  LuBookOpen,
  LuBriefcase,
  LuMapPin,
  LuClock,
  LuDollarSign,
  LuAward,
  LuArrowRight,
  LuLinkedin,
  LuGithub,
  LuTwitter,
} from "react-icons/lu";
import PageTemplate from "../components/PageTemplate";

export default function CareersPage() {
  return (
    <PageTemplate
      title="Careers"
      subtitle="Help us build the future of banking."
    >
      <div className="space-y-24">
        {/* Section 1: Expanded intro with stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Join a team that's redefining finance.
              <span className="block text-primary-600 mt-2">
                Your impact starts here.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At Stellar Bank, we're not just building another bank — we're
              creating the financial infrastructure for the next generation.
              Backed by $200M in Series C funding and trusted by over 500,000
              clients, we're growing fast and looking for passionate people to
              grow with us.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-primary-700">500k+</p>
                <p className="text-sm text-gray-500">Happy clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-700">$200M</p>
                <p className="text-sm text-gray-500">Series C funding</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-700">3</p>
                <p className="text-sm text-gray-500">Global offices</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-indigo-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <LuUsers className="h-8 w-8 text-primary-600" />
                <p className="font-semibold text-gray-900">
                  We're hiring across 6 departments
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Engineering
                </span>
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Product
                </span>
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Design
                </span>
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Data Science
                </span>
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Client
                  Success
                </span>
                <span className="flex items-center gap-2">
                  <LucideCheckCircle2 className="text-green-500" /> Compliance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Our values (detailed cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">What drives us</h2>
            <p className="text-gray-600 mt-3">
              Our core values shape every decision, product, and hire.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LuRocket,
                title: "Bold ambition",
                desc: "We tackle problems that seem impossible. Comfort zones are for weekends.",
              },
              {
                icon: LuUsers,
                title: "Client obsession",
                desc: "Every feature, every line of code — it all serves our clients' success.",
              },
              {
                icon: LuHeart,
                title: "Radical transparency",
                desc: "We share successes and failures openly. No hidden agendas.",
              },
              {
                icon: LuTrendingUp,
                title: "Continuous growth",
                desc: "$2,000 yearly learning stipend. You grow, we grow.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <value.icon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-500 mt-2 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Benefits & perks (detailed, with gradient background) */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefits that empower you
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <LuDollarSign className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Competitive compensation</h3>
                <p className="text-gray-300 text-sm">
                  Top-tier salary + equity packages. Performance bonuses twice a
                  year.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LuHeart className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Comprehensive health</h3>
                <p className="text-gray-300 text-sm">
                  Medical, dental, vision — 100% premiums covered for you and
                  family.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LuClock className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Unlimited PTO</h3>
                <p className="text-gray-300 text-sm">
                  Take what you need. Minimum 4 weeks encouraged.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LuGlobe className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Remote‑first culture</h3>
                <p className="text-gray-300 text-sm">
                  Work from anywhere. We'll set up your home office.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LuBookOpen className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Learning budget</h3>
                <p className="text-gray-300 text-sm">
                  $2,000/year for courses, conferences, or coaching.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LuCoffee className="h-6 w-6 text-primary-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Wellness stipend</h3>
                <p className="text-gray-300 text-sm">
                  $100/month for gym, meditation apps, or ergonomic gear.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Open positions with full details */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            Current openings
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Join a team of 200+ talented individuals shaping the future of
            finance. See below for roles that match your skills.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Senior Backend Engineer",
                type: "Full-time",
                location: "Remote (US/EU)",
                department: "Engineering",
                desc: "Build scalable microservices handling millions of requests. Experience with Go, Rust, or Node.js required.",
              },
              {
                title: "Product Manager – Digital",
                type: "Full-time",
                location: "New York, NY (Hybrid)",
                department: "Product",
                desc: "Lead roadmap for our mobile app. 5+ years B2C product experience, fintech preferred.",
              },
              {
                title: "Financial Crimes Analyst",
                type: "Full-time",
                location: "London, UK",
                department: "Compliance",
                desc: "Monitor transactions, file SARs, and enhance AML models. CAMS certification a plus.",
              },
              {
                title: "Frontend Engineer (React)",
                type: "Full-time",
                location: "Remote (Global)",
                department: "Engineering",
                desc: "Build responsive, accessible UIs with Next.js, Tailwind, and TypeScript.",
              },
              {
                title: "Client Success Manager",
                type: "Full-time",
                location: "Singapore",
                department: "Client Success",
                desc: "Onboard and retain enterprise clients. 3+ years in B2B SaaS or fintech.",
              },
              {
                title: "Data Scientist – Fraud Detection",
                type: "Full-time",
                location: "Remote (US/CA)",
                department: "Data Science",
                desc: "Develop ML models to detect anomalous patterns. Experience with Python, SQL, and Spark.",
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="group border border-gray-200 rounded-xl p-5 hover:shadow-md transition bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <LuBriefcase className="h-3 w-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <LuMapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-500 mt-1 text-sm">{job.desc}</p>
                  </div>
                  <a
                    href="/contact"
                    className="shrink-0 btn-outline text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Apply now <LuArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't see a perfect match?{" "}
            <a href="/contact" className="text-primary-600 hover:underline">
              Send us your resume anyway.
            </a>
          </p>
        </div>

        {/* Section 5: Application process (4 steps) */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-8">
            Our hiring process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold">Application</h3>
              <p className="text-sm text-gray-500">
                Submit resume + optional portfolio. We review within 5 days.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold">Screening call</h3>
              <p className="text-sm text-gray-500">
                30-min chat with recruiter about your experience and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold">Technical / Role interview</h3>
              <p className="text-sm text-gray-500">
                1-hour deep dive with hiring manager + panel.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-xl flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="font-semibold">Offer & onboarding</h3>
              <p className="text-sm text-gray-500">
                Decision within 1 week. Welcome to Stellar!
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Employee testimonials (social proof) */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <LuUsers className="h-8 w-8 text-primary-500 mb-3" />
            <p className="text-gray-700 italic">
              “The autonomy and trust here are unmatched. I shipped features
              that directly impacted our revenue within my first month.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                JD
              </div>
              <div>
                <p className="font-semibold">Jessica Du</p>
                <p className="text-xs text-gray-500">
                  Senior Frontend Engineer, joined 2023
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <LuAward className="h-8 w-8 text-primary-500 mb-3" />
            <p className="text-gray-700 italic">
              “Working at Stellar means you're surrounded by people who
              genuinely care about solving real problems. The learning curve is
              steep — but so are the rewards.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                MC
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-xs text-gray-500">
                  Product Manager, joined 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Final CTA with social links */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">Ready to make an impact?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            We're building a diverse, inclusive team. If you're excited about
            reimagining finance, we want to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              View all roles <LuArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/stellar"
              className="btn-outline inline-flex items-center gap-2"
            >
              <LuLinkedin className="h-4 w-4" /> Follow us
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-gray-400">
            <LuGithub className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
            <LuTwitter className="h-5 w-5 hover:text-gray-700 cursor-pointer" />
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Stellar Bank is an equal opportunity employer. We celebrate
            diversity and are committed to creating an inclusive environment for
            all.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
