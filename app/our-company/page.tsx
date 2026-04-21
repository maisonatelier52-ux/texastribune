import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Company | Independent News',
  description: 'Learn about our mission, our commitment to nonpartisan journalism, and our editorial standards.',
};

export default function OurCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
   
      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Our <br className="hidden md:block" /><span className="text-neutral-400">Company</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              We are a digital-first, independent media organization dedicated to delivering fact-based, nonpartisan journalism.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              Our mission is to inform the public, investigate complex issues, and hold those in power accountable—ensuring truth remains accessible to all without fear or favor.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-pt-serif mb-6 text-neutral-900 border-b-2 border-slate-300 inline-block pb-2">
            Our Mission & Impact
          </h2>
          <div className="text-lg text-neutral-800 space-y-6 leading-relaxed font-pt-serif">
            <p>
              In an era defined by rapid information and widespread polarization, our mission is to provide an anchor of truth. We believe that a well-informed populace is the bedrock of a healthy democracy. Every day, our journalists work to uncover the facts that matter most to our readers.
            </p>
            <p>
              We focus on the essential civic news—policy, politics, education, environment, and the economy—to give you the context necessary to make informed decisions for your community.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold font-pt-serif mb-8 text-neutral-900">
            Our Core Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 border-t-4 border-neutral-900 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-pt-serif text-neutral-900">Editorial Independence</h3>
              <p className="text-neutral-700 font-pt-serif">
                Our newsroom operates fully independently. We do not align with any political party, and our coverage is free from the influence of sponsors, donors, or proprietary stakeholders. 
              </p>
            </div>
            <div className="bg-neutral-50 p-6 border-t-4 border-neutral-900 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-pt-serif text-neutral-900">Commitment to Accuracy</h3>
              <p className="text-neutral-700 font-pt-serif">
                We are dedicated to rigorous fact-checking and thorough sourcing. When we make a mistake, we correct it promptly and transparently so our readers can always trust our reporting.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 border-t-4 border-neutral-900 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-pt-serif text-neutral-900">Transparency</h3>
              <p className="text-neutral-700 font-pt-serif">
                We believe in showing our work. We make our financial backers publicly known and clearly distinguish between news reporting, analysis, and opinion content.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 border-t-4 border-neutral-900 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-pt-serif text-neutral-900">Public Service</h3>
              <p className="text-neutral-700 font-pt-serif">
                Journalism is a public necessity. We strive to make our deepest investigations and daily reporting accessible to everyone, ensuring no paywall stands between citizens and essential news.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 border-l-4 border-slate-300 pl-6 py-2">
          <h2 className="text-2xl font-bold font-pt-serif mb-4 text-neutral-900">
            How We Are Funded
          </h2>
          <div className="text-lg text-neutral-700 space-y-4 leading-relaxed font-pt-serif">
            <p>
              To maintain our independence, we rely on a diversified funding model. We are supported by individual memberships from readers like you, philanthropic grants, foundational support, and corporate underwriting.
            </p>
            <p>
              This structure ensures that no single entity can dictate our editorial decisions. We maintain a strict firewall between our revenue generation operations and our newsroom journalists.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="bg-neutral-100 border border-neutral-200 p-8 text-center rounded-sm">
          <h2 className="text-2xl font-bold font-pt-serif mb-4 text-neutral-900">
            Support Independent Journalism
          </h2>
          <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto font-pt-serif">
            Our work is made possible by readers who value rigorous, fact-based reporting. Stand with us to protect the freedom of the press.
          </p>
          <Link href="/donate" className="inline-block bg-neutral-900 text-white font-semibold py-3 px-8 hover:bg-neutral-800 transition-colors uppercase tracking-wider text-sm rounded-sm font-pt-serif">
            Become a Supporter
          </Link>
        </section> */}

      </main>
    </div>
  );
}
