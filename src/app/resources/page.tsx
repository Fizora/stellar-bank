// src/app/resources/page.tsx
import PageTemplate from "@/app/components/PageTemplate";
import { LuFileText, LuVideo, LuBookOpen } from "react-icons/lu";

export default function ResourcesPage() {
  return (
    <PageTemplate
      title="Resources"
      subtitle="Guides, webinars, and tools to master your finances."
    >
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="p-6 border rounded-xl">
          <LuFileText className="h-8 w-8 text-primary-500" />
          <h3 className="mt-3 text-xl font-semibold">Guides</h3>
          <p className="text-gray-600">
            Download free e‑books on budgeting, investing, and retirement.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <LuVideo className="h-8 w-8 text-primary-500" />
          <h3 className="mt-3 text-xl font-semibold">Webinars</h3>
          <p className="text-gray-600">
            Live and recorded sessions with Stellar experts.
          </p>
        </div>
        <div className="p-6 border rounded-xl">
          <LuBookOpen className="h-8 w-8 text-primary-500" />
          <h3 className="mt-3 text-xl font-semibold">Glossary</h3>
          <p className="text-gray-600">Financial terms explained simply.</p>
        </div>
      </div>
    </PageTemplate>
  );
}
