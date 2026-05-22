// src/app/components/section/Hero.tsx
"use client";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-primary-50 to-white pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 mb-6">
              <LuSparkles className="h-4 w-4" />
              <span>Trusted Banking for Individuals and Businesses</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Banking built on
              <span className="block text-primary-600">
                trust, clarity, and service
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We provide secure, modern financial solutions designed to help
              individuals, families, and businesses manage money with
              confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#open"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open an Account <FiArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> Secure
                digital banking
              </span>
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> Dedicated
                customer support
              </span>
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> Personal
                and business solutions
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-700">
                  Premier Banking Account
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                  Competitive Returns
                </span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                Flexible account options
              </div>
              <div className="h-px w-full bg-gray-200 my-4"></div>

              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Digital account access</span>
                  <span className="text-primary-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Transparent pricing</span>
                  <span className="text-primary-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Support when you need it</span>
                  <span className="text-primary-600">✓</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-primary-600 py-2.5 text-white font-semibold hover:bg-primary-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
