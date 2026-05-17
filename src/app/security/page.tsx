// src/app/security/page.tsx
import {
  LuShield,
  LuLock,
  LuEye,
  LuServer,
  LuClipboardCheck,
  LuBug,
  LuDatabase,
  LuKey,
  LuFingerprint,
  LuClock,
  LuAward,
  LuGlobe,
  LuHardDrive,
  LuShieldCheck,
  LuFileText,
} from "react-icons/lu";
import PageTemplate from "../components/PageTemplate";
import { LucideAlertTriangle, LucideCheckCircle2 } from "lucide-react";

export default function SecurityPage() {
  return (
    <PageTemplate
      title="Security Center"
      subtitle="Your safety is our highest priority. Here’s how we protect you."
    >
      <div className="space-y-24">
        {/* Section 1: Expanded three-pillar overview (more details) */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <LuShield className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold">256‑bit encryption</h3>
            <p className="text-gray-500 mt-2">
              Bank‑grade AES-256 encryption for all data at rest and in transit.
              TLS 1.3 with perfect forward secrecy ensures your communications
              remain private, even against future decryption attempts.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <LuLock className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold">MFA required</h3>
            <p className="text-gray-500 mt-2">
              Multi‑factor authentication with hardware keys (WebAuthn), TOTP,
              or biometrics. We support YubiKey, Face ID, and fingerprint —
              giving you flexible yet uncompromising access control.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
            <LuEye className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold">Real‑time alerts</h3>
            <p className="text-gray-500 mt-2">
              Instant notifications for every login, transaction, or profile
              change via email, SMS, or push. You control your alert thresholds
              and can freeze activity with one click.
            </p>
          </div>
        </div>

        {/* Section 2: Compliance & Certifications (trust builders) */}
        <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-50 to-white border border-gray-200 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-40"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold">Industry‑leading compliance</h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              We don't just meet regulatory standards — we exceed them.
              Independent audits validate our controls annually.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <LuAward className="h-10 w-10 text-primary-600" />
                <div>
                  <p className="font-bold">SOC 2 Type II</p>
                  <p className="text-sm text-gray-500">
                    Security + Availability
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <LuShieldCheck className="h-10 w-10 text-primary-600" />
                <div>
                  <p className="font-bold">ISO 27001:2022</p>
                  <p className="text-sm text-gray-500">
                    Information Security Mgmt
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <LuClipboardCheck className="h-10 w-10 text-primary-600" />
                <div>
                  <p className="font-bold">PCI DSS Level 1</p>
                  <p className="text-sm text-gray-500">Payment Card Industry</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <LuGlobe className="h-10 w-10 text-primary-600" />
                <div>
                  <p className="font-bold">GDPR & CCPA</p>
                  <p className="text-sm text-gray-500">
                    Data privacy compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Infrastructure security (deep dive) */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            Multi‑layered infrastructure defence
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Every layer of our stack is hardened, monitored, and continuously
            improved.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <LuServer className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Isolated cloud architecture</h3>
                  <p className="text-gray-500 text-sm">
                    Dedicated VPCs, internal service mesh, and zero-trust
                    networking. No direct database access from the public
                    internet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <LuHardDrive className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">
                    Encrypted at rest & in transit
                  </h3>
                  <p className="text-gray-500 text-sm">
                    AES-256 for persistent volumes, TLS 1.3 for all API calls.
                    Keys managed by AWS KMS with automatic rotation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <LuDatabase className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Real‑time threat detection</h3>
                  <p className="text-gray-500 text-sm">
                    WAF, IDS/IPS, and anomaly detection using machine learning.
                    24/7 SOC with automated alerting.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <LuKey className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Strict access controls</h3>
                  <p className="text-gray-500 text-sm">
                    Just‑in‑time privileged access, mandatory MFA for all
                    employees, and continuous access reviews.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <LuBug className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Bug bounty program</h3>
                  <p className="text-gray-500 text-sm">
                    We invite ethical hackers through HackerOne. Rewards up to
                    $50,000 for critical vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <LuClock className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">
                    Automated patching & backups
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Critical patches applied within 48 hours. Daily encrypted
                    backups stored in geo‑redundant locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Data privacy & user control */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div>
              <h3 className="text-2xl font-bold">Your data belongs to you.</h3>
              <p className="text-gray-600 mt-2 max-w-xl">
                We never sell personal information. You can export or delete
                your data at any time. All data processing is contractually
                bound and audited.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                  <LucideCheckCircle2 className="text-green-600" /> Right to
                  access
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                  <LucideCheckCircle2 className="text-green-600" /> Right to
                  rectification
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                  <LucideCheckCircle2 className="text-green-600" /> Right to
                  erasure
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                  <LucideCheckCircle2 className="text-green-600" /> Data
                  portability
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <LuFileText className="h-10 w-10 text-primary-600 mx-auto mb-2" />
              <a
                href="/privacy"
                className="text-primary-600 text-sm font-medium hover:underline"
              >
                Read our privacy policy →
              </a>
            </div>
          </div>
        </div>

        {/* Section 5: Incident response & transparency */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Proactive incident response</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              While we've never experienced a security breach, we prepare as if
              one could happen tomorrow. Our incident response plan is tested
              quarterly through tabletop exercises and red‑team drills. In the
              unlikely event of an incident, you'll be notified within 72 hours
              with full transparency and remediation steps.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gray-500">
              <LucideAlertTriangle className="h-5 w-5 text-amber-500" />
              <span className="text-sm">
                Median resolution time: <strong>2.4 hours</strong> (internal
                drills)
              </span>
            </div>
          </div>
          <div className="bg-gray-900 text-white rounded-xl p-6">
            <p className="text-xl font-bold">
              “Security is a culture, not a checklist.”
            </p>
            <p className="mt-2 text-gray-300 text-sm">
              — Elena Vasquez, CISO at Stellar Financial
            </p>
            <div className="mt-4 pt-4 border-t border-gray-700 text-sm">
              <p>✔️ Annual third‑party penetration tests</p>
              <p>✔️ Continuous employee security training</p>
              <p>✔️ Phishing simulations monthly</p>
            </div>
          </div>
        </div>

        {/* Section 6: Additional trust signals (stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-200 pt-12">
          <div>
            <p className="text-3xl font-bold text-primary-700">100%</p>
            <p className="text-sm text-gray-500">Uptime SLA (past 12 months)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">$0</p>
            <p className="text-sm text-gray-500">
              Losses from security incidents
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">24/7</p>
            <p className="text-sm text-gray-500">Security operations center</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-700">200+</p>
            <p className="text-sm text-gray-500">
              Vulnerability scans annually
            </p>
          </div>
        </div>

        {/* Section 7: Final reassurance & CTA */}
        <div className="text-center py-8 bg-linear-to-t from-gray-50 to-white rounded-2xl">
          <LuShieldCheck className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">
            Rest easy. We've got it covered.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Security is never finished. We continuously invest in people,
            processes, and technology to stay ahead of threats. Have a specific
            concern? Our security team is ready to talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Contact security team
            </a>
            <a href="/security/report" className="btn-outline">
              Report a vulnerability →
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-8">
            *For urgent security issues, call our 24/7 hotline: +1 (888)
            555‑0142
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
