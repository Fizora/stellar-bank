// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuClock,
  LuGlobe,
  LuTwitter,
  LuLinkedin,
  LuInstagram,
  LuSend,
  LuHeadphones,
  LuBuilding2,
  LuCalendar,
} from "react-icons/lu";
import { LucideCheckCircle2 } from "lucide-react";
import PageTemplate from "../components/PageTemplate";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <PageTemplate
      title="Contact Us"
      subtitle="We're here 24/7 to help. Reach out any way you prefer."
    >
      <div className="space-y-24">
        {/* Section 1: Hero contact options (cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuPhone className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg">Call us</h3>
            <p className="text-2xl font-bold text-primary-600 mt-2">
              1-888-STELLAR
            </p>
            <p className="text-sm text-gray-500 mt-1">(1-888-783-5527)</p>
            <p className="text-xs text-gray-400 mt-3">24/7 client support</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuMail className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg">Email us</h3>
            <p className="text-primary-600 font-mono text-sm mt-2">
              hello@stellarbank.com
            </p>
            <p className="text-primary-600 font-mono text-sm">
              support@stellarbank.com
            </p>
            <p className="text-xs text-gray-400 mt-3">
              Response within 2 hours
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuMessageCircle className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg">Live chat</h3>
            <p className="text-gray-600 mt-2">Click the chat bubble</p>
            <p className="text-sm font-semibold text-green-600">
              Avg. 23 seconds to connect
            </p>
            <p className="text-xs text-gray-400 mt-3">Available 24/7</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LuGlobe className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="font-semibold text-lg">Social media</h3>
            <div className="flex justify-center gap-4 mt-2">
              <LuTwitter className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer" />
              <LuLinkedin className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer" />
              <LuInstagram className="h-5 w-5 text-gray-500 hover:text-primary-600 cursor-pointer" />
            </div>
            <p className="text-xs text-gray-400 mt-3">
              DM us for quick questions
            </p>
          </div>
        </div>

        {/* Section 2: Contact form + support hours (2-column) */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
            <p className="text-gray-500 mb-6">
              Fill out the form and we'll get back to you within one business
              day.
            </p>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <LucideCheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <p className="text-green-800 font-semibold">
                  Message sent successfully!
                </p>
                <p className="text-green-600 text-sm">We'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3"
                >
                  Send message <LuSend className="h-4 w-4" />
                </button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="underline">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          {/* Right: Support hours & other info */}
          <div className="space-y-6">
            <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <LuHeadphones className="h-7 w-7 text-primary-600" />
                <h3 className="text-xl font-semibold">24/7 client support</h3>
              </div>
              <p className="text-gray-600">
                Our support team is available around the clock, including
                weekends and holidays. No automated phone trees — you'll always
                speak to a real person within 60 seconds.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-500">1-888-STELLAR</p>
                </div>
                <div>
                  <p className="font-semibold">Live chat</p>
                  <p className="text-gray-500">Average 23 sec response</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <LuClock className="h-7 w-7 text-primary-600" />
                <h3 className="text-xl font-semibold">
                  Support hours by channel
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Phone & chat</span>
                  <span className="text-gray-600">24/7 / 365</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    Email (hello@stellarbank.com)
                  </span>
                  <span className="text-gray-600">
                    Response within 2h (9am-9pm ET)
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Technical support</span>
                  <span className="text-gray-600">
                    24/7 priority for premium clients
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">In‑person appointments</span>
                  <span className="text-gray-600">
                    Mon-Fri, 9am-5pm local time
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <LuBuilding2 className="h-7 w-7 text-primary-600" />
                <h3 className="text-xl font-semibold">Global offices</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">New York (HQ)</p>
                  <p className="text-sm text-gray-500">
                    200 Liberty Street, New York, NY 10006
                  </p>
                </div>
                <div>
                  <p className="font-medium">London</p>
                  <p className="text-sm text-gray-500">
                    30 Churchill Place, Canary Wharf, London E14 5EU
                  </p>
                </div>
                <div>
                  <p className="font-medium">Singapore</p>
                  <p className="text-sm text-gray-500">
                    Marina One, 9 Straits View, Singapore 018937
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm text-primary-600 hover:underline"
              >
                <LuCalendar className="h-4 w-4" /> Book an in‑person appointment
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Map placeholder (can embed Google Maps) */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 h-80 bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400">
            <LuMapPin className="h-12 w-12 mb-2" />
            <p>Interactive map would be embedded here</p>
            <p className="text-xs">(Google Maps API key required)</p>
          </div>
          {/* Uncomment when you have a map key:
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18...*" 
            className="w-full h-full border-0"
            allowFullScreen 
            loading="lazy">
          </iframe>
          */}
        </div>

        {/* Section 4: FAQ / quick answers */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-primary-700">
                What's your average response time?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Live chat: 23 seconds. Phone: under 60 seconds. Email: within 2
                hours during business hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                Do you offer 24/7 support?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Yes, phone and live chat are available 24/7, including weekends
                and holidays.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                Can I schedule a video call?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Absolutely. Use the contact form or chat to request a Zoom or
                Teams meeting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                Is there a way to report a security issue?
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Email security@stellarbank.com or call our dedicated security
                hotline at 1-888-555-0142.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Final reassurance */}
        <div className="text-center py-8">
          <LuHeadphones className="h-12 w-12 text-primary-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold">
            We're here to help — any time, any way.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Whether you're a client, a partner, or just curious, reach out. No
            question is too small.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
