'use client';

import { useState } from 'react';

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Contact <br className="hidden md:block" /><span className="text-neutral-400">Us</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              We want to hear from you.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              Whether you have a news tip, a question about our coverage, or need assistance with your membership, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-12 font-pt-serif">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">Get In Touch</h2>
          <div className="space-y-6 text-lg text-neutral-700">
            <div>
              <h3 className="font-bold text-neutral-900">News Tips</h3>
              <p>Have a confidential tip for our reporters? <br/><a href="mailto:tips@ourcompany.com" className="text-blue-600 hover:underline">tips@ourcompany.com</a></p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900">General Inquiries</h3>
              <p>For questions about our organization or events.<br/><a href="mailto:info@ourcompany.com" className="text-blue-600 hover:underline">info@ourcompany.com</a></p>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900">Membership Support</h3>
              <p>Need help with your donation or account?<br/><a href="mailto:members@ourcompany.com" className="text-blue-600 hover:underline">members@ourcompany.com</a></p>
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-50 p-8 border border-neutral-200">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900">Send a Message</h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold mb-2 text-neutral-700">Name</label>
              <input required type="text" className="text-neutral-800 w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-neutral-700">Email</label>
              <input required type="email" className="text-neutral-800 w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-500" placeholder="Your email address" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-neutral-700">Message</label>
              <textarea required rows={5} className="text-neutral-800 w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-500" placeholder="How can we help?"></textarea>
            </div>
            
            {isSubmitted && (
              <div className="text-green-600 font-bold">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <button type="submit" className="bg-neutral-900 text-white py-3 px-6 hover:bg-neutral-800 transition-colors w-full sm:w-auto">
              Submit Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
