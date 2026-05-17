// src/app/components/section/Hero.tsx
"use client";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

export default function Hero() {
  return (
    // Bagian luar (full width) dengan background
    <section className="relative min-h-screen bg-linear-to-br from-primary-50 to-white pt-24">
      {/* Container KONSISTEN — gunakan class yang sama dengan navbar */}
      {/* max-w-7xl, mx-auto, px-4 lg:px-8 → pastikan navbar juga pakai ini */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        {/* Flex untuk dua kolom: kiri teks, kanan kartu */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Bagian Kiri: Teks Hero */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge "Powered by..." */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 mb-6">
              <LuSparkles className="h-4 w-4" />
              <span>Powered by Stellar Intelligence™</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Banking that's
              <span className="block text-primary-600">Light‑years Ahead</span>
            </h1>

            {/* Deskripsi */}
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Experience the fusion of institutional security and AI‑driven
              fintech. Join 500,000+ clients who’ve upgraded to Stellar Bank.
            </p>

            {/* Tombol CTA */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#open"
                className="btn-primary inline-flex items-center gap-2"
              >
                Open Account <FiArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="btn-outline">
                Watch Demo
              </a>
            </div>

            {/* 3 poin keunggulan */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> No hidden
                fees
              </span>
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> 24/7
                support
              </span>
              <span className="flex items-center gap-1">
                <FiCheckCircle className="h-4 w-4 text-primary-500" /> FDIC
                insured
              </span>
            </div>
          </div>

          {/* Bagian Kanan: Kartu Akun */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              {/* Header kartu */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-700">
                  Stellar Flex Account
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                  4.25% APY
                </span>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $0 minimum
              </div>
              <div className="h-px w-full bg-gray-200 my-4"></div>

              {/* Daftar fitur */}
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Instant transfers</span>
                  <span className="text-primary-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>No overdraft fees</span>
                  <span className="text-primary-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Global ATM access</span>
                  <span className="text-primary-600">✓</span>
                </div>
              </div>

              {/* Tombol di dalam kartu */}
              <button className="mt-6 w-full rounded-full bg-primary-600 py-2.5 text-white font-semibold hover:bg-primary-700 transition">
                Get started →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
