import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy | Our Company',
  description: 'Our core standards and commitments to fair and accurate reporting.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
    
      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Editorial <br className="hidden md:block" /><span className="text-neutral-400">Policy</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              We uphold the highest established standards of journalism.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              Our principles are built on accuracy, independence, and fairness to ensure our readers receive trustworthy news.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
        <div className="prose prose-lg max-w-none font-pt-serif text-neutral-800 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">1. Independence and Integrity</h2>
            <p>
              We operate completely independently of any political party, corporate interest, or ideological agenda. No donor or sponsor has a say in what we report, how a story is framed, or who we interview.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">2. Verification and Fact-Checking</h2>
            <p>
              Our reporting is rooted in rigorous verification. Reporters are required to seek out primary sources, documentation, and multiple viewpoints to accurately present the context of a story. We do not publish unsubstantiated rumors or speculation as fact.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">3. Anonymous Sourcing</h2>
            <p>
              We strongly prefer on-the-record sourcing so readers can assess the credibility of the information. Anonymous sources are used strictly as a last resort, and only when the source provides critical information that cannot be obtained otherwise, and has a valid reason to fear reprisal.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">4. Distinguishing News and Opinion</h2>
            <p>
              We draw a clear line between straight news reporting and opinion journalism. Analysis, columns, and editorial pieces are clearly labeled so readers are never confused about the nature of the content they are reading.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
