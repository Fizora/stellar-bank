// src/app/page.tsx
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Services from "./components/section/Services";
import Testimonials from "./components/section/Testimonials";
import FAQ from "./components/section/FAQ";
import TrustStrip from "./components/section/TrustStrip"; // optional, create if you want
// You can also add a separate CTA section

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip /> {/* small component with awards, optional */}
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      {/* Final CTA can be added as a component */}
      <section className="relative overflow-hidden bg-primary-600 py-20">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to experience Stellar?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Join thousands who’ve upgraded to modern banking.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-white text-primary-600 px-8 py-3 text-base font-semibold shadow-md hover:bg-gray-100"
            >
              Open an Account – 3 min
            </a>
            <a
              href="#"
              className="rounded-full bg-primary-500 text-white px-8 py-3 text-base font-semibold ring-1 ring-white/30 hover:bg-primary-700"
            >
              Schedule Consultation
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            No credit check • No hidden fees • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
