// src/app/personal/page.tsx
import PageTemplate from "../components/PageTemplate";
import {
  LucideCheckCircle,
  LucideWallet,
  LucidePiggyBank,
  LucideCreditCard,
  LucideShield,
  LucideZap,
  LucideGlobe,
  LucideSmartphone,
  LucideUsers,
  LucideAward,
  LucideArrowRight,
  LucideClock,
  LucideDollarSign,
  LucideLock,
  LucideSparkles,
  LucideHeart,
} from "lucide-react";

export default function PersonalPage() {
  return (
    <PageTemplate
      title="Personal Banking"
      subtitle="Banking that fits your life, not the other way around."
    >
      <div className="space-y-24">
        {/* Section 1: Hero value proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your money, your rules.
              <span className="block text-primary-600 mt-2">
                Simple, fair, and rewarding.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Say goodbye to hidden fees, minimum balances, and outdated
              banking. Stellar Personal gives you a modern financial hub –
              high‑yield savings, cashback debit, early direct deposit, and
              55,000+ free ATMs. Trusted by over 500,000 individuals who've
              saved an average of $380/year in banking fees.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/open-account"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open an account <LucideArrowRight className="h-4 w-4" />
              </a>
              <a href="#learn-more" className="btn-outline">
                Compare accounts
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary-700">500k+</p>
                <p className="text-sm text-gray-500">Happy customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-700">4.9/5</p>
                <p className="text-sm text-gray-500">
                  App Store rating (22k reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-indigo-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <LucideSparkles className="h-8 w-8 text-primary-600" />
                <p className="font-semibold text-gray-900">
                  What you get (no gimmicks)
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  $0 monthly fees – forever
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  4.25% APY on savings
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  Up to 2 days early direct deposit
                </li>
                <li className="flex gap-2">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />{" "}
                  1% cashback on debit purchases
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Account types (cards) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Choose the account that fits you
            </h2>
            <p className="text-gray-600 mt-3">
              Both come with no hidden fees – just different superpowers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <LucideWallet className="h-10 w-10 text-primary-600 mb-3" />
              <h3 className="text-2xl font-bold">Stellar Flex Checking</h3>
              <p className="text-gray-500 mt-1">
                Everyday spending, built for convenience.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> $0
                  monthly fee, no minimum
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> 1%
                  cashback on debit purchases
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Free overdraft protection
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  55k+ fee‑free ATMs
                </li>
              </ul>
              <a
                href="/open-account"
                className="mt-6 inline-block btn-primary w-full text-center"
              >
                Open checking →
              </a>
            </div>
            <div className="bg-white rounded-xl border-2 border-primary-500 p-6 shadow-sm hover:shadow-md transition relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-0.5 rounded-full">
                Best value
              </span>
              <LucidePiggyBank className="h-10 w-10 text-primary-600 mb-3" />
              <h3 className="text-2xl font-bold">Stellar High‑Yield Savings</h3>
              <p className="text-gray-500 mt-1">
                Grow your money while you sleep.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  4.25% APY – no lock‑in
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" /> No
                  minimum balance
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Unlimited withdrawals
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <LucideCheckCircle className="h-4 w-4 text-primary-500" />{" "}
                  Auto‑save rounding feature
                </li>
              </ul>
              <a
                href="/open-account"
                className="mt-6 inline-block btn-primary w-full text-center"
              >
                Open savings →
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Perks & features grid */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold">Designed to help you win</h2>
            <p className="text-gray-600 mt-2">
              Every feature is built to save you money and time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <LucideZap className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Early direct deposit</h3>
                <p className="text-gray-500 text-sm">
                  Get paid up to 2 days earlier. No extra fee.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LucideGlobe className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">No foreign transaction fees</h3>
                <p className="text-gray-500 text-sm">
                  Use your card abroad – we don't charge extra.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LucideSmartphone className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Mobile check deposit</h3>
                <p className="text-gray-500 text-sm">
                  Snap a photo, funds available next day.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LucideShield className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">
                  Zero liability fraud protection
                </h3>
                <p className="text-gray-500 text-sm">
                  You're never responsible for unauthorized charges.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LucideCreditCard className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">
                  Virtual cards + freeze/unfreeze
                </h3>
                <p className="text-gray-500 text-sm">
                  Instant digital card for online shopping.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <LucideHeart className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Budgeting tools & insights</h3>
                <p className="text-gray-500 text-sm">
                  Categorize spending, set goals, save automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Testimonial + savings calculator style */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <LucideUsers className="h-10 w-10 text-primary-400 mb-4" />
              <p className="text-2xl md:text-3xl font-bold italic">
                “I switched from a traditional bank and saved over $400 in fees
                within six months. The app is beautiful, and the savings rate
                actually beats inflation.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-bold">
                  MT
                </div>
                <div>
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-gray-300 text-sm">
                    Verified customer, 2 years
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm uppercase tracking-wide text-primary-300">
                Average annual savings
              </p>
              <p className="text-5xl font-bold mt-1">$380</p>
              <p className="text-gray-200 text-sm mt-2">
                compared to traditional banks
              </p>
              <hr className="my-4 border-white/20" />
              <div className="flex justify-between text-sm">
                <span>Monthly fees avoided</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Interest earned (savings)</span>
                <span className="font-semibold">+4.25% APY</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>ATM fee refunds</span>
                <span className="font-semibold">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Security & FDIC */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <LucideLock className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Bank‑grade security</h3>
            <p className="text-gray-500 text-sm mt-2">
              256‑bit encryption, mandatory MFA, and real‑time fraud monitoring.
              Your money is protected 24/7.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <LucideAward className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">FDIC insured up to $250k</h3>
            <p className="text-gray-500 text-sm mt-2">
              Member FDIC. Eligible deposits are insured to the maximum allowed
              by law.
            </p>
          </div>
        </div>

        {/* Section 6: Pricing / fee transparency */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">
            What you'll never pay
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Monthly service fee</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Minimum balance</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Overdraft fee</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Foreign transaction fee</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">ATM fees (in-network)</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Paper statements</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Card replacement</p>
            </div>
            <div>
              <p className="font-semibold">$0</p>
              <p className="text-xs text-gray-500">Account closure</p>
            </div>
          </div>
        </div>

        {/* Section 7: Stats & awards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-200 pt-12">
          <div>
            <p className="text-3xl font-bold text-primary-700">4.9/5</p>
            <p className="text-sm text-gray-500">App Store rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">#1</p>
            <p className="text-sm text-gray-500">Best Neobank 2024 (Forbes)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">500k+</p>
            <p className="text-sm text-gray-500">Active customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">24/7</p>
            <p className="text-sm text-gray-500">US‑based support</p>
          </div>
        </div>

        {/* Section 8: Final CTA */}
        <div className="text-center py-8 bg-linear-to-t from-gray-50 to-white rounded-2xl">
          <LucideSparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Ready for better banking?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Open your account in under 3 minutes – no credit check, no deposit
            required. Start saving and earning from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/open-account"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Open an account <LucideArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="btn-outline inline-flex items-center gap-2"
            >
              Questions? Talk to us
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Already have an account?{" "}
            <a href="/login" className="text-primary-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
