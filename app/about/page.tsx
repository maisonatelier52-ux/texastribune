import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Independent News',
  description: 'Learn more about our independent journalism mission.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Centered Minimal Hero */}
        <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              About <br className="hidden md:block" /><span className="text-neutral-400">Us</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
                  We are committed to delivering rigorous, fact-based reporting to our community. Our only allegiance is to the truth and to our readers.
     </p>
          </div>
        </div>
      </section>
   
      {/* Main Content - Side-by-side layout */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-20 space-y-24">
        
        {/* History Area */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold font-pt-serif text-neutral-900 sticky top-24">
              Our History
            </h2>
          </div>
          <div className="md:w-2/3 prose prose-lg max-w-none font-pt-serif text-neutral-700">
            <p className="leading-relaxed">
              Founded with the belief that journalism is a public service, we have grown into a reliable source of news, analysis, and investigative journalism. We are digital-first and nonpartisan, meaning we do not endorse candidates or take sides in political disputes.
            </p>
            <p className="leading-relaxed mt-4">
              Over the years, we have expanded our coverage to ensure that every corner of our community receives the attention it deserves, growing from a small team of dedicated writers to a comprehensive newsroom.
            </p>
          </div>
        </div>

        <hr className="border-neutral-100" />

        {/* How We Work */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold font-pt-serif text-neutral-900 sticky top-24">
              How We Work
            </h2>
          </div>
          <div className="md:w-2/3 prose prose-lg max-w-none font-pt-serif text-neutral-700">
            <p className="leading-relaxed">
              We employ a team of experienced reporters, editors, and data analysts who work tirelessly to uncover the facts. From local policy debates to national economic trends, we cover the issues that impact your daily life with depth and clarity.
            </p>
            <p className="leading-relaxed mt-4">
              Our journalists are embedded in the communities they cover, spending time speaking with residents, officials, and experts to paint a comprehensive picture of the events shaping our world.
            </p>
          </div>
        </div>

        <hr className="border-neutral-100" />

        {/* Coverage Areas */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold font-pt-serif text-neutral-900 sticky top-24">
              Coverage Areas
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 font-pt-serif">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 border-b border-neutral-200 pb-2 inline-block">Politics & Policy</h3>
              <p className="text-neutral-600 leading-relaxed">
                We track legislation, hold elected officials accountable, and break down complex policy changes so that you can understand how government decisions affect you.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 border-b border-neutral-200 pb-2 inline-block">Education</h3>
              <p className="text-neutral-600 leading-relaxed">
                From early childhood education to higher learning, we investigate school funding, curriculum changes, and the challenges facing students and teachers today.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 border-b border-neutral-200 pb-2 inline-block">Environment</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our environmental reporting covers everything from climate change impacts and energy policy to public land management and conservation efforts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 border-b border-neutral-200 pb-2 inline-block">Justice System</h3>
              <p className="text-neutral-600 leading-relaxed">
                We provide in-depth coverage of the courts, law enforcement, and the criminal justice system, highlighting issues of fairness, reform, and public safety.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Banner */}
      <section className="bg-neutral-900 py-20 px-4 md:px-8 text-center mt-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-pt-serif text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-neutral-300 mb-8 font-pt-serif leading-relaxed">
            Don't miss out on the stories that matter most. Subscribe to our newsletters for daily updates, investigative reports, and breaking news alerts.
          </p>
          <Link href="/newsletters" className="inline-block border-2 border-white text-white font-bold py-3 px-8 hover:bg-white hover:text-neutral-900 transition-colors uppercase tracking-wider text-sm">
            Subscribe Now
          </Link>
        </div>
      </section>

    </div>
  );
}
