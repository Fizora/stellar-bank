// src/app/open-account/page.tsx
"use client";
import { useState } from "react";
import {
  LuUser,
  LuMail,
  LuPhone,
  LuArrowRight,
  LuLock,
  LuShield,
  LuBuilding,
  LuCreditCard,
  LuDollarSign,
} from "react-icons/lu";
import Link from "next/link";
import { LucideCheckCircle2 } from "lucide-react";

export default function OpenAccountPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    ssn: "",
    accountType: "checking",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to API
    console.log("Account opening data", formData);
    alert("Application submitted! We'll contact you within 24 hours.");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                <LuUser className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold">Personal information</h2>
              <p className="text-gray-500 text-sm">Step 1 of 3</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <div className="relative">
                  <LuUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-lg py-2.5 focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-lg py-2.5"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <div className="relative">
                  <LuPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    className="pl-10 w-full border border-gray-300 rounded-lg py-2.5"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                <LuShield className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold">Identity verification</h2>
              <p className="text-gray-500 text-sm">
                Step 2 of 3 (secure & encrypted)
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of birth
                </label>
                <input
                  type="date"
                  required
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-3"
                  value={formData.dob}
                  onChange={(e) => updateField("dob", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street address
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-3"
                  placeholder="123 Main St, Apt 4B"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last 4 digits of SSN / ITIN
                </label>
                <div className="relative">
                  <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    required
                    maxLength={4}
                    className="pl-10 w-full border border-gray-300 rounded-lg py-2.5"
                    placeholder="••••"
                    value={formData.ssn}
                    onChange={(e) => updateField("ssn", e.target.value)}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  We use bank‑level encryption. Your privacy is protected.
                </p>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                <LuCreditCard className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold">Choose your account</h2>
              <p className="text-gray-500 text-sm">
                Step 3 of 3 – no fees, no minimums
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-3">
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="accountType"
                    value="checking"
                    checked={formData.accountType === "checking"}
                    onChange={() => updateField("accountType", "checking")}
                    className="text-primary-600"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">Stellar Flex Checking</p>
                    <p className="text-sm text-gray-500">
                      0% monthly fee, free ATM access worldwide
                    </p>
                  </div>
                  <LuDollarSign className="text-gray-400" />
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="radio"
                    name="accountType"
                    value="savings"
                    checked={formData.accountType === "savings"}
                    onChange={() => updateField("accountType", "savings")}
                    className="text-primary-600"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">Stellar High‑Yield Savings</p>
                    <p className="text-sm text-gray-500">
                      4.25% APY, no minimum balance
                    </p>
                  </div>
                  <LuBuilding className="text-gray-400" />
                </label>
              </div>
              <div className="bg-primary-50 p-3 rounded-lg text-sm">
                <p className="font-medium">✔ No credit check</p>
                <p className="text-gray-600">✔ FDIC insured up to $250,000</p>
                <p className="text-gray-600">✔ Takes less than 5 minutes</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-1.5 bg-linear-to-r from-primary-600 to-primary-400"></div>

          <div className="p-6 md:p-8">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      step >= s
                        ? "bg-primary-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s ? <LucideCheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 ${step > s ? "bg-primary-600" : "bg-gray-200"}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Dynamic step content */}
            <form
              onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}
            >
              {renderStep()}

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 border border-gray-300 rounded-lg py-2.5 font-medium hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-primary-600 text-white rounded-lg py-2.5 font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                  >
                    Continue <LuArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white rounded-lg py-2.5 font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                  >
                    Open account <LuArrowRight size={18} />
                  </button>
                )}
              </div>
            </form>

            <p className="text-xs text-gray-400 text-center mt-6">
              By continuing, you agree to our{" "}
              <Link href="#" className="underline hover:text-primary-600">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline hover:text-primary-600">
                privacy policy
              </Link>
              . No hidden fees.
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-6 mt-6 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <LuShield size={12} /> FDIC insured
          </span>
          <span className="flex items-center gap-1">
            <LuLock size={12} /> 256‑bit SSL
          </span>
          <span className="flex items-center gap-1">
            <LucideCheckCircle2 size={12} /> 5‑min application
          </span>
        </div>
      </div>
    </main>
  );
}
