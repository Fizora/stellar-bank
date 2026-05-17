// src/app/components/Footer.tsx
import {
  LuSparkles,
  LuTwitter,
  LuGlobe,
  LuMail,
  LuPhone,
  LuMapPin,
  LuShare2,
} from "react-icons/lu";

const footerLinks = {
  Products: [
    "Personal Banking",
    "Business Accounts",
    "Wealth Management",
    "Credit Cards",
    "Loans & Mortgages",
  ],
  Resources: [
    "Security Center",
    "FAQs",
    "Rates & Fees",
    "Mobile App",
    "Branch Locator",
  ],
  Company: [
    "About Stellar",
    "Careers",
    "Press Room",
    "Investor Relations",
    "Sustainability",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Use",
    "FDIC Info",
    "Accessibility",
    "Fraud Alert",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <LuSparkles className="h-7 w-7 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">
                Stellar Bank
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Elevating financial experiences through innovation, security, and
              human-centric design.
            </p>
            <div className="mt-6 flex gap-4">
              <LuTwitter className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer transition" />
              <LuGlobe className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer transition" />
              <LuShare2 className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer transition" />
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary-600 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="flex items-center gap-1">
              <LuPhone className="h-3.5 w-3.5" /> 1-888-STELLAR
            </span>
            <span className="flex items-center gap-1">
              <LuMail className="h-3.5 w-3.5" /> hello@stellarbank.com
            </span>
            <span className="flex items-center gap-1">
              <LuMapPin className="h-3.5 w-3.5" /> 200 Liberty St, NYC
            </span>
          </div>
          <p>© 2025 Stellar Bank. Member FDIC. Equal Housing Lender.</p>
        </div>
      </div>
    </footer>
  );
}
