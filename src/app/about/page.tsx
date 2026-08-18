import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import TeamCard, { type TeamMember } from "@/components/TeamCard";

const executiveBoard: TeamMember[] = [
  {
    name: "Tyler Spitzer-Wu",
    role: "President",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/tyler.jpg",
    linkedin: "https://www.linkedin.com/in/tspitzerwu/",
  },
  {
    name: "Joyce Kim",
    role: "VP Marketing",
    major: "Information Analysis & HCI",
    linkedin: "https://www.linkedin.com/in/joyce-kim-341176378/",
  },
  {
    name: "Arjun Suri",
    role: "VP Recruitment",
    major: "Industrial and Operations Engineering",
    image: "/images/about_pics/headshots/arjun.jpeg",
    linkedin: "https://www.linkedin.com/in/rjunsuri/",
  },
  {
    name: "Rio Tanabe",
    role: "VP Finance",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/rio.jpeg",
    linkedin: "https://www.linkedin.com/in/rio-tanabe-152696232/",
  },
  {
    name: "Pranav Joshi",
    role: "VP Professional Development",
    major: "Computer Science",
    image: "/images/about_pics/headshots/joshi.jpeg",
    linkedin: "https://www.linkedin.com/in/pranavv-joshi/",
  },
  {
    name: "Andy Liang",
    role: "VP Client Relations",
    major: "Computer Science + Economics",
    image: "/images/about_pics/headshots/andy.jpeg",
    linkedin: "https://www.linkedin.com/in/yanhang-liang/",
  },
  {
    name: "Dana Clocker",
    role: "VP External Affairs",
    major: "Information Analysis",
    image: "/images/about_pics/headshots/dana.jpeg",
    linkedin: "https://www.linkedin.com/in/dana-clocker/",
  },
  {
    name: "Phoebe Knoll",
    role: "VP Community",
    major: "Economics & Environmental Science",
    linkedin: "https://www.linkedin.com/in/phoebeknoll/",
  },
];

const resources = [
  {
    name: "Bloomberg Cities",
    description: "Research, tools, and stories on how city halls are using data and innovation to improve services.",
    url: "https://bloombergcities.jhu.edu/",
  },
  {
    name: "NACTO",
    description: "The National Association of City Transportation Officials — guidance and standards for urban streets.",
    url: "https://nacto.org/",
  },
  {
    name: "Sidewalk Talk (Sidewalk Labs)",
    description: "Essays and case studies on the technology and design of cities from the former Alphabet urban-innovation team.",
    url: "https://www.sidewalklabs.com/",
  },
  {
    name: "Smart Cities Dive",
    description: "Daily news covering smart infrastructure, mobility, and civic technology.",
    url: "https://www.smartcitiesdive.com/",
  },
  {
    name: "Urban Institute",
    description: "Nonpartisan research on housing, transportation, and economic mobility in American cities.",
    url: "https://www.urban.org/",
  },
  {
    name: "Streetsblog",
    description: "News and advocacy on sustainable transportation and street design.",
    url: "https://streetsblog.org/",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-white md:text-7xl font-semibold leading-[1.1] tracking-tight">
        What is URB Consulting?
      </h1>

      {/* Intro */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Image src="/images/about_pics/groupM.jpg" alt="URB Consulting" width={1600} height={1500} className="w-full h-96 md:h-[600px] object-cover" />
        </div>
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-foreground/90">
            URB Consulting is rooted in the University of Michigan&apos;s Urban Technology program.
            The founding of the club was inspired by a need for students in the Urban Tech program to gain professional experience.
            We set out to create those opportunities ourselves by building a consulting group focused on
            interdisciplinary projects for companies building technology spanning the physical and digital worlds.
            <br /><br />
            Now, we are proudly associated with the Taubman College of Architecture and Urban Planning,
            the School of Information, and the College of Engineering, and we recruit members from across the
            University&apos;s 19 colleges. Our strength is rooted in this diversity of backgrounds, with current members
            having experience across technology, consulting, real estate, finance, startups, automotive, and more!
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="mt-24">
        <SectionHeading eyebrow="The People" title="Meet the team" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {executiveBoard.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted opacity-70">
          * Executive board pictured — full member roster and profiles coming soon.
        </p>
      </section>

      {/* Resources */}
      <section className="mt-24">
        <SectionHeading
          eyebrow="Keep Learning"
          title="Resources"
          subtitle="A short reading list on cities, technology, and the organizations shaping urban tech."
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">{resource.name}</h3>
              <p className="mt-2 text-sm text-muted">{resource.description}</p>
              <span className="mt-4 inline-block text-sm text-urb-maize">Visit site →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
