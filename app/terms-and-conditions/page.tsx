import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Our Company',
  description: 'The rules guiding your use of our platform.',
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Terms & <br className="hidden md:block" /><span className="text-neutral-400">Conditions</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              Please review these terms before using our site.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              By accessing our website and engaging with our journalism, you agree to be bound by the following conditions regarding content usage and user behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="prose prose-lg max-w-none font-pt-serif text-neutral-800 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Furthermore, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Intellectual Property Rights</h2>
            <p>
              All content published on this site, including text, logos, graphics, and images, is the property of our organization or its content suppliers and is protected by international copyright laws. While we encourage you to share our journalism, you may not republish, reproduce, or modify our content for commercial purposes without explicit written consent.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">User Conduct</h2>
            <p>
              Our platform aims to foster civic debate. When participating in any interactive features of our site (such as commenting or submitting forms), you agree to not post materials that are unlawful, abusive, harassing, defamatory, or deceptive. We reserve the right to remove any content that violates these standards.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website following any such changes constitutes your acceptance of the new terms. You should periodically review this page to be aware of any updates.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
