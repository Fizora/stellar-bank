// src/app/components/PageTemplate.tsx
import { ReactNode } from "react";

export default function PageTemplate({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </main>
  );
}
