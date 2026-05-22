// src/app/personal/page.tsx
import PageTemplate from "../components/PageTemplate";
import {
  LucideArrowRight,
  LucideCheckCircle,
  LucideWallet,
  LucidePiggyBank,
  LucideZap,
  LucideGlobe,
  LucideSmartphone,
  LucideShield,
  LucideCreditCard,
  LucideHeart,
  LucideBuilding2,
  LucideBadgeCheck,
  LucideScale,
  LucideLock,
  LucideAward,
  LucideSparkles,
  LucideUsers,
  LucideClock,
} from "lucide-react";

// ==================== DATA MODELS ====================
interface Feature {
  icon: typeof LucideZap;
  title: string;
  description: string;
  note?: string;
}

interface AccountType {
  name: string;
  tagline: string;
  icon: typeof LucideWallet;
  isPopular?: boolean;
  features: string[];
  ctaLink: string;
}

interface Stat {
  value: string;
  label: string;
}

interface FeeItem {
  name: string;
}

// ==================== REUSABLE COMPONENTS ====================
const StatCard = ({ value, label }: Stat) => (
  <div className="text-center">
    <p className="text-3xl font-bold text-primary-700">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, note }: Feature) => (
  <div className="flex gap-3 group">
    <Icon className="h-6 w-6 text-primary-600 shrink-0 mt-1 transition-transform group-hover:scale-110" />
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      {note && <p className="text-xs text-gray-400 mt-1">{note}</p>}
    </div>
  </div>
);

const AccountCard = ({
  name,
  tagline,
  icon: Icon,
  isPopular,
  features,
  ctaLink,
}: AccountType) => (
  <div
    className={`relative bg-white rounded-xl border ${isPopular ? "border-primary-500 shadow-md" : "border-gray-200"} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
  >
    {isPopular && (
      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-0.5 rounded-full">
        Best value
      </span>
    )}
    <Icon className="h-10 w-10 text-primary-600 mb-3" />
    <h3 className="text-2xl font-bold">{name}</h3>
    <p className="text-gray-500 mt-1 text-sm">{tagline}</p>
    <ul className="mt-4 space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm">
          <LucideCheckCircle className="h-4 w-4 text-primary-500 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a
      href={ctaLink}
      className="mt-6 inline-block btn-primary w-full text-center"
    >
      Open {name.split(" ")[1]?.toLowerCase() || "account"} →
    </a>
  </div>
);

// ==================== MAIN PAGE ====================
export default function PersonalPage() {
  // Data
  const heroStats: Stat[] = [
    { value: "500k+", label: "Active personal accounts" },
    { value: "4.9/5", label: "App Store (22k+ reviews)" },
    { value: "$0", label: "Monthly fees – ever" },
  ];

  const accounts: AccountType[] = [
    {
      name: "Stellar Flex Checking",
      tagline: "For spending, paying bills, and daily purchases.",
      icon: LucideWallet,
      features: [
        "$0 monthly fee – no minimum balance required",
        "1% cashback on debit card purchases",
        "Free overdraft protection (transfers from savings)",
        "55,000+ fee‑free ATMs nationwide",
      ],
      ctaLink: "/open-account?type=checking",
    },
    {
      name: "Stellar High‑Yield Savings",
      tagline: "Grow your emergency fund or down payment faster.",
      icon: LucidePiggyBank,
      isPopular: true,
      features: [
        "4.25% APY – compounded daily, paid monthly",
        "No minimum balance or monthly fees",
        "Unlimited withdrawals – no penalty",
        "Auto‑save rounding feature (round up debit purchases)",
      ],
      ctaLink: "/open-account?type=savings",
    },
  ];

  const features: Feature[] = [
    {
      icon: LucideZap,
      title: "Early direct deposit",
      description:
        "Receive your paycheck up to 2 days before the scheduled date.",
      note: "No opt‑in required.",
    },
    {
      icon: LucideGlobe,
      title: "No foreign transaction fees",
      description: "Use your card abroad – we never add a 3% fee.",
      note: "Only Visa/Mastercard currency conversion applies.",
    },
    {
      icon: LucideSmartphone,
      title: "Mobile check deposit",
      description: "Snap a photo, funds available next business day.",
      note: "Up to $5,000 daily.",
    },
    {
      icon: LucideShield,
      title: "Zero liability fraud protection",
      description:
        "You pay $0 for unauthorized transactions when reported promptly.",
      note: "Federal Regulation E protection.",
    },
    {
      icon: LucideCreditCard,
      title: "Virtual cards + freeze/unfreeze",
      description:
        "Generate a one‑time virtual card number for online shopping.",
      note: "Instantly lock a lost card.",
    },
    {
      icon: LucideHeart,
      title: "Budgeting tools & insights",
      description:
        "Categorize spending, set savings goals, and receive personalized alerts.",
    },
  ];

  const neverPayFees: string[] = [
    "Monthly service fee",
    "Minimum balance requirement",
    "Overdraft fee (with auto‑transfer)",
    "Foreign transaction fee",
    "In‑network ATM fees",
    "Paper statements (optional)",
    "Card replacement (standard shipping)",
    "Account closure fee",
  ];

  const statsRow: Stat[] = [
    { value: "4.9/5", label: "App Store rating (22k+ reviews)" },
    { value: "#1", label: "Best Neobank 2024 – Forbes" },
    { value: "500k+", label: "Active personal banking customers" },
    { value: "24/7", label: "US‑based support (phone, chat, email)" },
  ];

  return (
    <PageTemplate
      title="Personal Banking"
      subtitle="Banking that fits your life – with the strength of a 125‑year‑old institution."
    >
      <div className="space-y-24">
        {/* ========== HERO SECTION ========== */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your money, your rules.
              <span className="block text-primary-600 mt-2">
                Backed by a bank you can trust.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              <strong className="font-semibold">Stellar Bank</strong> has served
              individuals and communities since 1898. Today, we combine that
              century‑old stability with a modern, fee‑free experience. Enjoy
              high‑yield savings (4.25% APY*), cashback debit, early direct
              deposit, and 55,000+ free ATMs – all without a single hidden fee.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <LucideBadgeCheck className="h-4 w-4 text-primary-500" /> Member
                FDIC
              </span>
              <span className="flex items-center gap-1">
                <LucideShield className="h-4 w-4 text-primary-500" /> 256‑bit
                encryption
              </span>
              <span className="flex items-center gap-1">
                <LucideScale className="h-4 w-4 text-primary-500" /> No hidden
                fees
              </span>
            </div>
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
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {heroStats.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary-100 to-indigo-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
                <LucideSparkles className="h-8 w-8 text-primary-600" />
                <p className="font-semibold text-gray-900">
                  What you get – explained clearly
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>$0 monthly fees</strong> – no minimum balance, no
                    service charge.
                  </span>
                </li>
                <li className="flex gap-2 text-sm">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>4.25% APY on savings</strong> – variable rate,
                    compounded daily, no lock‑in.
                  </span>
                </li>
                <li className="flex gap-2 text-sm">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Up to 2 days early direct deposit</strong> – access
                    your paycheck sooner.
                  </span>
                </li>
                <li className="flex gap-2 text-sm">
                  <LucideCheckCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>1% cashback on debit purchases</strong> –
                    automatically credited monthly.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-4 border-t border-gray-200 pt-3">
                *Annual Percentage Yield (APY) effective as of March 2025 and
                subject to change. See{" "}
                <a href="/rates" className="underline">
                  current rates
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* ========== ACCOUNT TYPES ========== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold">
              Two accounts. One transparent fee structure.
            </h2>
            <p className="text-gray-600 mt-3">
              Both are FDIC‑insured and come with 24/7 fraud monitoring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map((account, idx) => (
              <AccountCard key={idx} {...account} />
            ))}
          </div>
        </div>

        {/* ========== COMPANY PROFILE HIGHLIGHT ========== */}
        <div className="bg-linear-to-r from-primary-50 to-white rounded-2xl p-8 border border-primary-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <LucideBuilding2 className="h-12 w-12 text-primary-700 mx-auto mb-2" />
            <h2 className="text-3xl font-bold">
              More than an app – a 125‑year legacy of trust
            </h2>
            <p className="text-gray-600 mt-2">
              Stellar Bank is a true, regulated financial institution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <LucideShield className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-bold">FDIC‑insured up to $250k</h3>
              <p className="text-sm text-gray-500">
                Your deposits are insured by the full faith of the U.S.
                government.
              </p>
            </div>
            <div className="text-center p-4">
              <LucideClock className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-bold">Founded 1898</h3>
              <p className="text-sm text-gray-500">
                One of the oldest community banks, now serving all 50 states.
              </p>
            </div>
            <div className="text-center p-4">
              <LucideAward className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h3 className="font-bold">Regulated & audited</h3>
              <p className="text-sm text-gray-500">
                Subject to regular exams by the OCC and CFPB.
              </p>
            </div>
          </div>
        </div>

        {/* ========== FEATURES GRID ========== */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold">
              Designed to help you win – every feature explained
            </h2>
            <p className="text-gray-600 mt-2">
              No jargon. No asterisks (except where legally required).
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>

        {/* ========== TESTIMONIAL + SAVINGS CALCULATOR ========== */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <LucideUsers className="h-10 w-10 text-primary-400 mb-4" />
              <p className="text-2xl md:text-3xl font-bold italic">
                “I switched from a traditional bank and saved over $400 in fees
                within six months. The app is intuitive, but what impressed me
                most is the 24/7 US‑based support.”
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
                Average annual savings vs. traditional banks
              </p>
              <p className="text-5xl font-bold mt-1">$380</p>
              <p className="text-gray-200 text-sm mt-2">
                Based on 2024 independent study of 2,000 customers.
              </p>
              <hr className="my-4 border-white/20" />
              <div className="flex justify-between text-sm">
                <span>Monthly fees avoided</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Interest earned on $5,000 savings (1 year)</span>
                <span className="font-semibold">~$212</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>ATM fee refunds (out‑of‑network)</span>
                <span className="font-semibold">Unlimited, $5/month max</span>
              </div>
              <p className="text-xs text-white/50 mt-3">
                *Example uses 4.25% APY – actual earnings vary.
              </p>
            </div>
          </div>
        </div>

        {/* ========== SECURITY & FDIC ========== */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <LucideLock className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">
              Bank‑grade security – explained
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              All data encrypted with AES‑256. Mandatory multi‑factor
              authentication. Real‑time AI fraud monitoring.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <LucideAward className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">
              FDIC insurance – what it covers
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Each depositor is insured up to $250,000 per ownership category.
              Since 1933, no depositor has lost a penny of FDIC‑insured funds.
            </p>
          </div>
        </div>

        {/* ========== FEE TRANSPARENCY ========== */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">
            What you'll never pay – our fee promise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {neverPayFees.map((fee, idx) => (
              <div key={idx}>
                <p className="font-semibold">$0</p>
                <p className="text-xs text-gray-500">{fee}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Out‑of‑network ATM owners may charge a fee; we do not charge one.
            Overdraft protection requires a linked savings account.
          </p>
        </div>

        {/* ========== STATS & AWARDS ========== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-200 pt-12">
          {statsRow.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* ========== FINAL CTA ========== */}
        <div className="text-center py-8 bg-linear-to-t from-gray-50 to-white rounded-2xl">
          <LucideSparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Ready for better banking?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Open your Stellar account in under 3 minutes – no credit check, no
            initial deposit required. Start saving and earning from day one with
            full FDIC protection.
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
              Talk to a personal banker
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Already have an account?{" "}
            <a href="/login" className="text-primary-600 hover:underline">
              Sign in
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-4 max-w-md mx-auto">
            Stellar Bank, Member FDIC. All personal accounts are subject to
            approval. See{" "}
            <a href="/disclosures" className="underline">
              Deposit Account Agreement
            </a>{" "}
            for full terms.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
