// src/app/wealth/page.tsx
import {
  ShieldCheck,
  TrendingUp,
  Landmark,
  Briefcase,
  Users,
  Award,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageTemplate from "../components/PageTemplate";

export default function WealthPage() {
  return (
    <PageTemplate
      title="Wealth Management"
      subtitle="Preserve and grow your legacy with institutional‑grade advice."
    >
      {/* Main content container */}
      <div className="space-y-24">
        {/* ---- SECTION 1: Hero / Value Proposition (expanded) ---- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Beyond traditional wealth management.
              <span className="block text-primary-600 mt-2">
                A true financial partnership.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              For over two decades, Stellar Wealth has served as the trusted
              advisor to entrepreneurs, executives, and family offices. We
              combine the rigor of institutional investing with the personalised
              attention of a private family office. Our fiduciary promise means
              your interests always come first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Schedule a consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#approach" className="btn-outline">
                Our approach
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary-700">98%</p>
                <p className="text-sm text-gray-500">client retention rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-700">$32B+</p>
                <p className="text-sm text-gray-500">assets under management</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-indigo-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary-600" />
                <p className="font-semibold text-gray-900">
                  Fiduciary standard – always.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  No proprietary product quotas
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  Fully transparent fee structure
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  Dedicated wealth advisor + support team
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  Quarterly performance & strategy reviews
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---- SECTION 2: Core Pillars (cards with icons) ---- */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Four pillars of enduring wealth
            </h2>
            <p className="text-gray-600 mt-3">
              A holistic framework refined over 20 years of serving complex
              portfolios.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Active Investment Mgmt",
                desc: "Tactical asset allocation, manager selection & direct indexing.",
              },
              {
                icon: <Landmark className="h-8 w-8" />,
                title: "Estate & Trust Services",
                desc: "Multi‑generational wealth transfer, trust administration & gifting strategies.",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Alternative Investments",
                desc: "Private equity, venture capital, real estate and hedge funds.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Retirement & Tax Planning",
                desc: "Tax‑loss harvesting, Roth conversions, and deferred compensation.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- SECTION 3: Convincing story – "The Stellar Edge" with gradient background ---- */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">The Stellar Edge™</h2>
              <p className="mt-4 text-gray-200 text-lg leading-relaxed">
                While many wealth managers rely on cookie‑cutter models, we
                built a proprietary analytics platform – Stellar Atlas – that
                combines real‑time risk analytics, alternative data, and
                AI‑driven forecasting. Your portfolio is continuously
                stress‑tested against hundreds of macroeconomic scenarios.
              </p>
              <p className="mt-4 text-gray-200">
                The result? Resilience through market cycles, tax‑efficient
                growth, and a clear line of sight to your life goals.
              </p>
              <div className="mt-6 flex gap-6 text-sm">
                <div>
                  <span className="font-bold text-primary-300">150+</span>{" "}
                  <span className="text-gray-300">
                    Years of combined experience
                  </span>
                </div>
                <div>
                  <span className="font-bold text-primary-300">3:1</span>{" "}
                  <span className="text-gray-300">Client‑to‑advisor ratio</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-2xl font-bold">
                “They think like owners, not asset gatherers.”
              </p>
              <p className="mt-3 text-gray-200">
                — Family office principal, $500M AUM
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm">
                <Award className="h-5 w-5 text-primary-300" />
                <span>Forbes Best Wealth Manager 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---- SECTION 4: Statistics & trust indicators (more detailed) ---- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-gray-200 last:border-0">
            <p className="text-4xl font-bold text-primary-700">$32B+</p>
            <p className="text-sm text-gray-500 mt-1">
              Assets under management
            </p>
          </div>
          <div className="border-r border-gray-200 last:border-0">
            <p className="text-4xl font-bold text-primary-700">98%</p>
            <p className="text-sm text-gray-500 mt-1">
              Client retention (10+ yrs)
            </p>
          </div>
          <div className="border-r border-gray-200 last:border-0">
            <p className="text-4xl font-bold text-primary-700">25+</p>
            <p className="text-sm text-gray-500 mt-1">
              Years of proven track record
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-700">45+</p>
            <p className="text-sm text-gray-500 mt-1">
              CFA / CFP® professionals
            </p>
          </div>
        </div>

        {/* ---- SECTION 5: Process – How we work (4 steps) ---- */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              A seamless, transparent process
            </h2>
            <p className="text-gray-600 mt-3">
              From first conversation to lifelong partnership.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep‑dive into your goals, risk tolerance, and family dynamics.",
              },
              {
                step: "02",
                title: "Strategy design",
                desc: "Custom investment policy statement & wealth plan.",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Tax‑optimised portfolio construction & manager selection.",
              },
              {
                step: "04",
                title: "Ongoing governance",
                desc: "Quarterly reviews, rebalancing, and proactive tax management.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 border border-gray-200 rounded-xl p-6 bg-white"
              >
                <span className="text-4xl font-bold text-primary-200">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- SECTION 6: Access to alternative investments ---- */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Institutional alternatives, now accessible.
              </h3>
              <p className="text-gray-600 mt-2 max-w-xl">
                Private equity, venture capital, real estate, and private credit
                – typically reserved for endowments and pension funds.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                Blackstone
              </span>
              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                KKR
              </span>
              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                Carlyle
              </span>
              <span className="bg-white rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                APOLLO
              </span>
            </div>
          </div>
        </div>

        {/* ---- SECTION 7: Final CTA with strong conviction ---- */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold">
            Your legacy deserves a dedicated partner.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Join families who have trusted us to manage, protect, and grow their
            wealth across generations. No obligations – just a candid
            conversation.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Meet an advisor <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            *All conversations are strictly confidential.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
