import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team | Our Company',
  description: 'Meet the journalists and editors behind our newsroom.',
};

const teamMembers = [
  {
    name: "Everett Caldwell",
    role: "Senior News Correspondent",
    image: "/images/everett-caldwell.webp",
    bio: "Everett Caldwell is a U.S.-based journalist specializing in breaking news, business, and global affairs. With over a decade of newsroom experience, he focuses on delivering clear, fact-driven reporting on complex international and economic developments.",
    socials: { twitter: "#", email: "everett@ourcompany.com" }
  },
  {
    name: "Maren Whitlock",
    role: "Staff Writer",
    image: "/images/maren-whitlock.webp",
    bio: "Maren Whitlock covers a wide range of topics including culture, entertainment, and public policy. Known for her analytical storytelling, she brings depth and clarity to fast-moving news cycles.",
    socials: { twitter: "#", email: "maren@ourcompany.com" }
  },
  {
    name: "Julian Straker",
    role: "Senior Reporter",
    image: "/images/julian-straker.webp",
    bio: "Julian Straker reports on financial markets, corporate strategy, economic policy, and healthcare developments. His work emphasizes data-driven insights and the broader impact of business and health sector decisions on everyday consumers, with a focus on how policy, innovation, and access to care shape public well-being.",
    socials: { twitter: "#", email: "julian@ourcompany.com" }
  },
  {
    name: "Tessa Holloway",
    role: "Political Correspondent",
    image: "/images/tessa-holloway.webp",
    bio: "Tessa Holloway focuses on U.S. politics, national affairs, and public policy. Her reporting combines on-the-ground coverage with in-depth research, offering clear and comprehensive insights into elections, legislative developments, and the broader political landscape shaping the country.",
    socials: { twitter: "#", email: "tessa@ourcompany.com" }
  },
  {
    name: "Dominic Vance",
    role: "Sports Reporter",
    image: "/images/dominic-vance.webp",
    bio: "Dominic Vance covers global sports, international competitions, and the business of athletics. He is known for translating complex developments in leagues, tournaments, and sports policy into accessible, reader-focused analysis, with a focus on how global events shape athletes, teams, and the sports industry.",
    socials: { twitter: "#", email: "dominic@ourcompany.com" }
  },
  {
    name: "Lila Montgomery",
    role: "Global Affairs Editor",
    image: "/images/lila-montgomery.webp",
    bio: "Lila Montgomery is a senior editor at The Texas Tribune, where she oversees coverage of international affairs, global events, and cross-border issues. She has reported from multiple countries, covering diplomacy, conflict, and major global developments. Her work focuses on how international events affect communities, economies, and political landscapes, with a particular emphasis on the U.S. role in global affairs.",
    socials: { twitter: "#", email: "lila@ourcompany.com" }
  },
  {
    name: "Harrison Pike",
    role: "World News Correspondent",
    image: "/images/harrison-pike.webp",
    bio: "Harrison Pike is a U.S.-based journalist covering international news, geopolitics, and global economic developments. His reporting focuses on conflicts, diplomacy, and cross-border policy decisions, offering clear analysis of how global events impact political stability and international relations.",
    socials: { twitter: "#", email: "harrison@ourcompany.com" }
  }
];

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="py-16 md:py-14 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="w-full md:w-5/12 flex-shrink-0">
            <h1 className="text-5xl md:text-7xl font-bold font-pt-serif text-neutral-900 tracking-tight leading-none mb-4">
              Our <br className="hidden md:block" /><span className="text-neutral-400">Team</span>
            </h1>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-2xl md:text-3xl font-pt-serif leading-[1.1] text-neutral-800 font-medium">
              Meet the dedicated journalists and professionals behind our reporting.
            </p>
            <p className="mt-6 text-lg md:text-xl font-pt-serif text-neutral-600 leading-[1.2]">
              Our newsroom consists of seasoned reporters, editors, and analysts who bring a diverse set of skills and deep expertise to cover the issues that matter most.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-pt-serif">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white p-8 border border-neutral-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-sm">
              <div className="w-32 h-32 relative rounded-full overflow-hidden mb-6 border border-neutral-200 bg-neutral-100 flex-shrink-0">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-neutral-500 font-semibold text-xs tracking-widest uppercase mb-4">{member.role}</p>
              <p className="text-neutral-700 leading-relaxed flex-grow text-base mb-6">
                {member.bio}
              </p>
              <div className="flex gap-4 mt-auto">
                {member.socials.twitter && (
                  <a href={member.socials.twitter} aria-label="Twitter" className="text-neutral-400 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                )}
                {member.socials.email && (
                  <a href={`mailto:${member.socials.email}`} aria-label="Email" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
