// src/app/components/section/TrustStrip.tsx
import { FiAward, FiShield, FiGlobe } from "react-icons/fi";

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-gray-200 py-4">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <FiAward className="h-4 w-4 text-primary-500" /> Forbes Best Bank 2025
        </span>
        <span className="flex items-center gap-2">
          <FiShield className="h-4 w-4 text-primary-500" /> J.D. Power #1 in
          Client Trust
        </span>
        <span className="flex items-center gap-2">
          <FiGlobe className="h-4 w-4 text-primary-500" /> Operating in 32
          countries
        </span>
      </div>
    </div>
  );
}
