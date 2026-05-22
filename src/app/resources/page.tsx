// src/app/resources/page.tsx
import {
  LuFileText,
  LuVideo,
  LuBookOpen,
  LuCalculator,
  LuTrendingUp,
  LuCalendar,
  LuArrowRight,
} from "react-icons/lu";
import PageTemplate from "../components/PageTemplate";

// ==================== DATA MODELS ====================
interface Guide {
  title: string;
  link: string;
}

interface Webinar {
  title: string;
  date: string;
  link: string;
}

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

interface Calculator {
  name: string;
  description: string;
  link: string;
  icon: typeof LuCalculator;
}

// ==================== REUSABLE COMPONENTS ====================
// Matches the contact card style exactly
const ResourceCard = ({
  icon: Icon,
  title,
  description,
  children,
  ctaText,
  ctaLink,
}: any) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 text-left hover:shadow-md transition">
    <Icon className="h-10 w-10 text-primary-600 mb-4" />
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-500 mt-1 text-sm">{description}</p>
    <div className="mt-4">{children}</div>
    <a
      href={ctaLink}
      className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium mt-6 hover:gap-2 transition-all"
    >
      {ctaText} <LuArrowRight className="h-3 w-3" />
    </a>
  </div>
);

// Calculator tile – matches contact's stat card style (border + hover:shadow-md)
const CalculatorTile = ({
  name,
  description,
  link,
  icon: Icon,
}: Calculator) => (
  <a
    href={link}
    className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition group"
  >
    <Icon className="h-7 w-7 text-primary-500 mx-auto group-hover:scale-110 transition-transform" />
    <p className="font-medium mt-2 text-gray-800">{name}</p>
    <p className="text-xs text-gray-400 mt-0.5">{description}</p>
  </a>
);

// Blog card – consistent with contact card design
const BlogCard = ({ date, title, excerpt, link }: BlogPost) => (
  <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
    <p className="text-xs text-primary-500 font-medium uppercase tracking-wide">
      {date}
    </p>
    <h3 className="font-bold text-lg mt-2 text-gray-900 hover:text-primary-700 transition-colors">
      {title}
    </h3>
    <p className="text-gray-500 text-sm mt-2 line-clamp-3">{excerpt}</p>
    <a
      href={link}
      className="text-primary-600 text-sm inline-flex items-center gap-1 mt-4 font-medium hover:gap-2 transition-all"
    >
      Read more →
    </a>
  </div>
);

// ==================== MAIN PAGE ====================
export default function ResourcesPage() {
  // Data
  const guides: Guide[] = [
    {
      title: "“The 12‑Month Emergency Fund” (PDF)",
      link: "/resources/guides/emergency-fund",
    },
    {
      title: "“Investing 101: Index Funds vs. Active”",
      link: "/resources/guides/investing-101",
    },
    {
      title: "“Tax‑Efficient Withdrawals in Retirement”",
      link: "/resources/guides/tax-efficient",
    },
  ];

  const webinars: Webinar[] = [
    {
      title: "🏦 “Building Credit from Zero”",
      date: "Mar 25",
      link: "/resources/webinars/credit",
    },
    {
      title: "📊 “High‑Yield Savings vs. CDs”",
      date: "Apr 2",
      link: "/resources/webinars/savings-vs-cds",
    },
    {
      title: "👴 “Social Security Optimization”",
      date: "Apr 10",
      link: "/resources/webinars/social-security",
    },
  ];

  const calculators: Calculator[] = [
    {
      name: "Savings goal",
      description: "How long to reach $10k?",
      link: "/calculators/savings-goal",
      icon: LuTrendingUp,
    },
    {
      name: "Mortgage affordability",
      description: "Principal + interest + taxes",
      link: "/calculators/mortgage",
      icon: LuCalculator,
    },
    {
      name: "Compound interest",
      description: "See your money grow",
      link: "/calculators/compound-interest",
      icon: LuTrendingUp,
    },
    {
      name: "Debt payoff",
      description: "Snowball vs. avalanche",
      link: "/calculators/debt-payoff",
      icon: LuCalculator,
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      date: "March 10, 2025",
      title: "How the Fed’s rate decision affects your savings account",
      excerpt:
        "A plain‑English breakdown of monetary policy and what it means for your APY.",
      link: "/blog/fed-rates",
    },
    {
      date: "March 3, 2025",
      title: "FDIC insurance: Are you covered for more than $250k?",
      excerpt:
        "Ownership categories explained – plus how to maximize your coverage legally.",
      link: "/blog/fdic-coverage",
    },
    {
      date: "February 25, 2025",
      title: "5 budgeting methods: Which one actually works?",
      excerpt:
        "Zero‑based, 50/30/20, envelope, pay‑yourself‑first, and values‑based.",
      link: "/blog/budgeting-methods",
    },
  ];

  return (
    <PageTemplate
      title="Financial Learning Center"
      subtitle="Expert‑led resources, calculators, and tools – all free for Stellar customers and the public."
    >
      <div className="space-y-24">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Financial literacy is the foundation of lasting wealth. Our
            resources are created by Stellar’s in‑house CFP® professionals and
            reviewed by our compliance team. No sales pitches – just actionable
            education.
          </p>
        </div>

        {/* Main resource categories – 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <ResourceCard
            icon={LuFileText}
            title="Guides & E‑books"
            description="Deep dives into budgeting, investing, and retirement."
            ctaText="Access all guides"
            ctaLink="/resources/guides"
          >
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
              {guides.map((guide, idx) => (
                <li key={idx}>{guide.title}</li>
              ))}
            </ul>
          </ResourceCard>

          <ResourceCard
            icon={LuVideo}
            title="Webinars & Events"
            description="Live sessions with Q&A + on‑demand library."
            ctaText="View calendar"
            ctaLink="/resources/webinars"
          >
            <div className="space-y-1.5 text-sm">
              {webinars.map((webinar, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{webinar.title}</span>
                  <span className="text-gray-400 text-xs">{webinar.date}</span>
                </div>
              ))}
            </div>
          </ResourceCard>

          <ResourceCard
            icon={LuBookOpen}
            title="Glossary & Explainers"
            description="Over 200 financial terms defined in plain English."
            ctaText="Browse glossary"
            ctaLink="/resources/glossary"
          >
            <p className="text-sm text-gray-600">
              <span className="font-medium">Featured:</span> APY vs. APR ·
              Compound interest · FDIC coverage limits · RMDs · 401(k) match
            </p>
          </ResourceCard>
        </div>

        {/* Interactive calculators – matches contact page stat boxes */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <LuCalculator className="h-10 w-10 text-primary-600 mx-auto mb-2" />
            <h2 className="text-2xl font-bold">Financial calculators</h2>
            <p className="text-gray-500">
              Make informed decisions with our free, mobile‑friendly tools.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {calculators.map((calc, idx) => (
              <CalculatorTile key={idx} {...calc} />
            ))}
          </div>
        </div>

        {/* Blog feed */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest from Stellar Insights</h2>
            <a
              href="/resources/blog"
              className="text-primary-600 text-sm font-medium hover:gap-2 transition-all inline-flex items-center gap-1"
            >
              View all <LuArrowRight className="h-3 w-3" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
        </div>

        {/* Disclaimer – matches contact page footer style */}
        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
          <p>
            The information provided in the Stellar Learning Center is for
            educational purposes only and does not constitute financial, tax, or
            legal advice. Stellar Bank does not provide investment advisory
            services. Please consult a qualified professional for your specific
            situation.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
