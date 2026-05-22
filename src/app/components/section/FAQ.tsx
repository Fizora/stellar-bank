// src/app/components/section/FAQ.tsx
"use client";
import { useState } from "react";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    q: "How do I open an account with Stellar Bank?",
    a: "You can begin the application online in a few simple steps. You will typically need a government-issued ID and basic personal information to complete verification.",
  },
  {
    q: "Is Stellar Bank insured?",
    a: "Eligible deposit accounts are protected in accordance with the applicable deposit insurance rules in our operating jurisdiction. Specific coverage details are available in the product disclosures.",
  },
  {
    q: "What are the monthly fees?",
    a: "Fees vary by account type. Key pricing information is shown in the relevant product schedule so you can review charges before applying.",
  },
  {
    q: "How secure is the mobile app?",
    a: "We use industry-standard security controls, including encryption, authentication measures, and monitoring designed to help protect customer accounts and data.",
  },
  {
    q: "Does Stellar Bank offer investment or digital asset services?",
    a: "Availability depends on the products and jurisdictions we support. Where offered, those services are provided through separate disclosures and eligibility requirements.",
  },
  {
    q: "What customer support options are available?",
    a: "Customers can reach us through the contact channels listed on our website. Support availability may vary by service and account type.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-600">
            Clear answers about our accounts, services, and support.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 bg-gray-50"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-gray-900"
              >
                {faq.q}
                <FiChevronRight
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    open === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-gray-600 border-t border-gray-200 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-600 font-medium"
          >
            Still have questions? Contact support{" "}
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
