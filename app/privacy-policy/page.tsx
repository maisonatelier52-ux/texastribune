import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Our Company',
  description: 'How we manage and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Privacy <br className="hidden md:block" /><span className="text-neutral-400">Policy</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              We respect your privacy and your digital rights.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              This policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="prose prose-lg max-w-none font-pt-serif text-neutral-800 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you sign up for our newsletters, create an account, make a donation, or participate in our events. This may include your name, email address, physical address, and payment information. We also automatically collect some technical data, such as your IP address and browsing behavior, through cookies.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">How We Use Your Information</h2>
            <p>
              The information we collect is used to enhance your experience, deliver requested content, process transactions, and communicate updates about our organization. We may use analytics data to understand our audience better and optimize our journalism distribution.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Data Sharing</h2>
            <p>
              We do not sell, rent, or lease your personal information to third parties. We may share necessary data with trusted third-party service providers (like payment processors and email delivery services) solely for the purpose of operating our organization. These partners are bound by strict confidentiality agreements.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Your Rights</h2>
            <p>
              Depending on your location, you have rights regarding your personal data, including the right to access, correct, or delete it, as well as the right to opt-out of certain communications. If you would like to exercise these rights, please contact us at <a href="mailto:privacy@ourcompany.com" className="underline text-blue-600">privacy@ourcompany.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
