import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Correction Policy | Our Company',
  description: 'Our procedures for correcting errors and updates.',
};

export default function CorrectionPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Correction <br className="hidden md:block" /><span className="text-neutral-400">Policy</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              We believe transparency is the foundation of trust.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              When we make an error, we own it. Our commitment is to acknowledge, correct, and learn from our mistakes as swiftly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="prose prose-lg max-w-none font-pt-serif text-neutral-800 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Admitting Our Mistakes</h2>
            <p>
              Despite our rigorous editorial standards and fact-checking processes, mistakes happen. When an error is identified in our reporting—whether a factual inaccuracy, misspelled name, or misstated context—we correct it promptly. We do not stealth-edit stories to hide our mistakes.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">How We Handle Corrections</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Factual Errors:</strong> If a piece of factual information is incorrect, the text is amended, and a clear "Correction" note is added at the top or bottom of the article to explain what was changed and when.</li>
              <li><strong>Clarifications:</strong> If an article is factually correct but the language is vague or misleading, we will update the text and append a "Clarification" note.</li>
              <li><strong>Editor's Notes:</strong> For severe errors affecting the fundamental premise of a story, a prominent Editor's Note will be attached to explain the failure in our editorial process.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Submit a Correction Request</h2>
            <p className="bg-yellow-50 border border-yellow-200 p-6 rounded-sm text-neutral-800 mt-4">
              If you believe you have found an error in our reporting, please email us directly with the details, including a link to the article, at <a href="mailto:corrections@ourcompany.com" className="font-bold underline text-neutral-900 hover:text-black">corrections@ourcompany.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
