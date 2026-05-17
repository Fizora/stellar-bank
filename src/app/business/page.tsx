// src/app/business/page.tsx
import PageTemplate from "@/app/components/PageTemplate";
import {
  LucideCheckCircle,
  LucideBuilding2,
  LucideCreditCard,
  LucideGlobe,
  LucideRocket,
  LucideShield,
  LucideUsers,
  LucideZap,
  LucideBarChart3,
  LucidePhone,
  LucideLock,
  LucideTrendingUp,
  LucideAward,
  LucideArrowRight,
  LucideDollarSign,
  LucideClock,
  LucideFileText,
  LucideSparkles,
} from "lucide-react";

export default function BusinessPage() {
  return (
    <PageTemplate
      title="Business Banking"
      subtitle="From startups to enterprises – banking that scales with you."
    >
      <div className="space-y-24">
        {/* Section 1: Hero / value proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Banking that grows with your business.
              <span className="block text-primary-600 mt-2">
                From seed to scale.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Join over 50,000 businesses that use Stellar Business for their
              day‑to‑day banking, payments, and lending. We combine
              institutional‑grade treasury tools with a startup‑friendly
              approach — no hidden fees, no monthly minimums, and a dedicated
              relationship manager from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/open-account"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open business account <LucideArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact-sales" className="btn-outline">
                Talk to sales
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary-700">50k+</p>
                <p className="text-sm text-gray-500">Business clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-700">$5B+</p>
                <p className="text-sm text-gray-500">
                  Annual transaction volume
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-indigo-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <LucideRocket className="h-8 w-8 text-primary-600" />
                <p className="font-semibold text-gray-900">
                  Built for modern businesses
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  No monthly fees for first 12 months
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  1.5% cashback on eligible spend
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  API access for custom integrations
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  Dedicated relationship manager
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Core features (grid of cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Everything you need to run your finances
            </h2>
            <p className="text-gray-600 mt-3">
              Powerful tools, simple pricing, and human support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: LucideBuilding2,
                title: "Business Checking",
                desc: "1.5% cashback, 0% monthly fees, unlimited transactions, free wire transfers.",
              },
              {
                icon: LucideCreditCard,
                title: "Corporate Cards",
                desc: "Virtual & physical cards with spend limits, real‑time controls, and 2% cashback.",
              },
              {
                icon: LucideTrendingUp,
                title: "Lending & Credit",
                desc: "SBA loans, lines of credit up to $5M, and invoice factoring.",
              },
              {
                icon: LucideGlobe,
                title: "Global Payments",
                desc: "Accept payments in 135+ currencies. Low FX fees with transparent rates.",
              },
              {
                icon: LucideZap,
                title: "API Treasury",
                desc: "Programmatic payments, balance checks, and account automation.",
              },
              {
                icon: LucideShield,
                title: "Fraud Protection",
                desc: "AI‑powered fraud detection, 3D Secure, and zero liability guarantee.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <feature.icon className="h-10 w-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-500 mt-2 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Testimonial + stats with gradient background */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <LucideUsers className="h-10 w-10 text-primary-400 mb-4" />
              <p className="text-2xl md:text-3xl font-bold italic">
                “Stellar Business saved us 40% on banking fees and gave us
                real‑time visibility into our cash flow. The API integration was
                seamless.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-gray-300 text-sm">CFO, TechScale Inc.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-3xl font-bold text-primary-300">50k+</p>
                <p className="text-sm text-gray-200">Business clients</p>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-3xl font-bold text-primary-300">$5B+</p>
                <p className="text-sm text-gray-200">Annual volume</p>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-3xl font-bold text-primary-300">98%</p>
                <p className="text-sm text-gray-200">Client retention</p>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-3xl font-bold text-primary-300">135+</p>
                <p className="text-sm text-gray-200">Countries supported</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: API & developer experience */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Build on our banking platform
            </h2>
            <p className="text-gray-600 mt-3">
              RESTful APIs, webhooks, and SDKs to embed financial services into
              your product.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <p className="font-mono text-sm text-gray-300 mb-2">
                POST /v1/transfers
              </p>
              <pre className="text-xs text-green-400 bg-gray-800 p-4 rounded-lg overflow-x-auto">
                {`{
  "amount": 10000,
  "currency": "USD",
  "destination": "acc_123",
  "metadata": {
    "invoice_id": "INV-001"
  }
}`}
              </pre>
              <div className="mt-4 flex gap-3">
                <a
                  href="/docs"
                  className="text-primary-400 text-sm hover:underline"
                >
                  Read API docs →
                </a>
                <a
                  href="/sandbox"
                  className="text-primary-400 text-sm hover:underline"
                >
                  Try sandbox →
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <LucideZap className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Real‑time webhooks</h3>
                  <p className="text-gray-500 text-sm">
                    Get instant notifications for payments, disputes, and
                    balances.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <LucideLock className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Enterprise‑grade security</h3>
                  <p className="text-gray-500 text-sm">
                    TLS 1.3, API key rotation, and granular permissions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <LucideBarChart3 className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Analytics dashboard</h3>
                  <p className="text-gray-500 text-sm">
                    Monitor API usage, error rates, and latency in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Pricing plans */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="text-gray-600 mt-2">
              No surprises. Only what you need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="text-3xl font-bold mt-3">
                $0
                <span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">For first 12 months</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  1.5% cashback
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> 5
                  free wire transfers/mo
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> API
                  access
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Phone support
                </li>
              </ul>
              <a
                href="/open-account"
                className="mt-6 inline-block btn-outline w-full text-center"
              >
                Get started
              </a>
            </div>
            <div className="bg-white rounded-xl border-2 border-primary-500 p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-0.5 rounded-full">
                Most popular
              </span>
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="text-3xl font-bold mt-3">
                $29
                <span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">After first year</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> 2%
                  cashback
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Unlimited wire transfers
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Dedicated RM
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Priority support 24/7
                </li>
              </ul>
              <a
                href="/open-account"
                className="mt-6 inline-block btn-primary w-full text-center"
              >
                Open now
              </a>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="text-3xl font-bold mt-3">Custom</p>
              <p className="text-sm text-gray-500 mt-1">Tailored pricing</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Custom cashback
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> SLA
                  guarantee
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  On‑site support
                </li>
                <li className="flex items-center justify-center gap-1">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  White‑glove onboarding
                </li>
              </ul>
              <a
                href="/contact"
                className="mt-6 inline-block btn-outline w-full text-center"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>

        {/* Section 6: Integrations & partners */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold">Works with your stack</h2>
            <p className="text-gray-600 mt-2">
              Seamless integration with leading platforms.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              "QuickBooks",
              "Xero",
              "Shopify",
              "Salesforce",
              "Stripe",
              "HubSpot",
            ].map((partner) => (
              <div
                key={partner}
                className="bg-gray-100 rounded-lg px-4 py-2 text-gray-600 font-medium text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: FAQ / trust builders */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <LucideClock className="h-5 w-5 text-primary-600" /> Fast account
              opening
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Get approved in under 24 hours with no credit check for basic
              accounts. Enterprise accounts take 2-3 business days.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <LucidePhone className="h-5 w-5 text-primary-600" /> 24/7 priority
              support
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              All business plans include phone, chat, and email support. Average
              response: 2 minutes.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <LucideShield className="h-5 w-5 text-primary-600" /> FDIC insured
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Up to $250,000 per depositor. Additional private insurance
              available for high‑balance accounts.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <LucideAward className="h-5 w-5 text-primary-600" /> Trusted by
              industry leaders
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Rated #1 business bank for startups by Forbes 2024. 4.9/5 from
              2,500+ reviews.
            </p>
          </div>
        </div>

        {/* Section 8: Final CTA with conviction */}
        <div className="text-center py-8 bg-linear-to-t from-gray-50 to-white rounded-2xl">
          <LucideSparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Ready to scale your business?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Join thousands of business owners who have switched to Stellar for
            better rates, modern tools, and human support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/open-account"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Open business account <LucideArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="btn-outline inline-flex items-center gap-2"
            >
              Talk to a specialist
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-8">
            No commitment. Free consultation for first 10 minutes.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
