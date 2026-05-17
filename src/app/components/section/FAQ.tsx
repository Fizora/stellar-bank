// src/app/components/section/FAQ.tsx
"use client";
import { useState } from "react";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    q: "How do I open an account with Stellar Bank?",
    a: "Opening an account takes less than 5 minutes. Simply click 'Open Account' on our homepage, verify your identity with a government ID, and make an initial deposit of $10 or more. You'll get instant access to your digital wallet and debit card.",
  },
  {
    q: "Is Stellar Bank FDIC insured?",
    a: "Yes, Stellar Bank is a member FDIC (Certificate #58421). Deposits are insured up to $250,000 per depositor, per ownership category.",
  },
  {
    q: "What are the monthly fees?",
    a: "Our Stellar Checking account has $0 monthly fees with no minimum balance. Premium accounts have fees that can be waived with qualifying activities like direct deposit or maintaining a $5,000 balance.",
  },
  {
    q: "How secure is the mobile app?",
    a: "We use 256‑bit encryption, biometric login, real‑time fraud monitoring, and optional hardware security keys. Stellar Bank has never experienced a data breach.",
  },
  {
    q: "Can I invest in crypto through Stellar?",
    a: "Yes, through our Stellar Digital division you can trade Bitcoin, Ethereum, and 20+ altcoins directly from your banking dashboard with institutional custody.",
  },
  {
    q: "What customer support options exist?",
    a: "24/7 live chat, phone support with average 23‑second pickup, and dedicated relationship managers for premium clients.",
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
            Everything you need to know about Stellar Bank.
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
                  className={`h-5 w-5 text-gray-500 transition-transform ${open === idx ? "rotate-90" : ""}`}
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
