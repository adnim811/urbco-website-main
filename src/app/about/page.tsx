import Image from "next/image";

type BoardMember = {
  name: string;
  role: string;
  major: string;
  image: string;
  linkedin: string;
};

const executiveBoard: BoardMember[] = [
  {
    name: "Aditya Nimbalkar",
    role: "President",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/aditya.jpeg",
    linkedin: "https://www.linkedin.com/in/adnim/",
  },
  {
    name: "Trini Sernas",
    role: "VP Community",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/trini.jpeg",
    linkedin: "https://www.linkedin.com/in/trini-sernas-abb4ba300/",
  },
  {
    name: "Arjun Suri",
    role: "VP Recruitment",
    major: "Industrial and Operations Engineering",
    image: "/images/about_pics/headshots/arjun.jpeg",
    linkedin: "https://www.linkedin.com/in/rjunsuri/",
  },
  {
    name: "Sarah Klemmer",
    role: "VP Professional Development",
    major: "Computer Science + Cognitive Science",
    image: "/images/about_pics/headshots/sarah.jpeg",
    linkedin: "https://www.linkedin.com/in/sarahklemmer/",
  },
  {
    name: "Pranav Boopalam",
    role: "VP Client Acquisition",
    major: "Urban Technology + Computer Science",
    image: "/images/about_pics/headshots/pranav.jpeg",
    linkedin: "https://www.linkedin.com/in/pranav-boopalam/",
  },
  {
    name: "Jonathan Lou",
    role: "VP Finance",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/jonathan.jpeg",
    linkedin: "https://www.linkedin.com/in/huy-dung-lou-3b67a0250/",
  },
  {
    name: "Sophia Liu",
    role: "VP Marketing",
    major: "Economics",
    image: "/images/about_pics/headshots/sophia.jpeg",
    linkedin: "https://www.linkedin.com/in/sophialiu12/",
  },
  {
    name: "Tyler Spitzer-Wu",
    role: "VP External Affairs",
    major: "Urban Technology",
    image: "/images/about_pics/headshots/tyler.jpg",
    linkedin: "https://www.linkedin.com/in/tspitzerwu/",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-white md:text-7xl font-semibold leading-[1.1] tracking-tight">
        What is URB Consulting?
      </h1>
      
      {/* Intro + Executive Board */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-foreground/90">
            URB Consulting is rooted in the University of Michigan’s Urban Technology program. 
            The founding of the club was inspired by a need for students in the Urban Tech program to gain professional experience. 
            At the time, the program was just in its infancy and had no graduates yet, 
            meaning it wasn&apos;t particularly clear what the professional world of UT actually looked like. 
            So, we set out to create those opportunities ourselves.
            <br /><br />
            Now, we are proudly associated with the Taubman College of Architecture and Urban Planning, 
            the School of Information, and the College of Engineering, and we recruit members from across the 
            University&apos;s 19 colleges. Our strength is rooted in this diversity of backgrounds, with current members 
            having experience with a broad variety of roles/companies:
            <br /><br />
            • Technical Program Management at Microsoft<br />
            • Operations at GE<br />
            • Strategy at General Motors<br />
            • Real Estate Development at McDonald&apos;s<br />
            • Product at various real estate startups<br />
            • Software Engineering at CGI Consulting<br />
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Image src="/images/about_pics/URB_group_photo.JPG" alt="URB Consulting executive board" width={1600} height={1066} className="w-full h-80 md:h-[420px] object-cover" />
        </div>
      </section>
      
      {/* Executive Board Grid */}
      <section className="mt-16">
        <h2 className="text-3xl text-white md:text-5xl font-semibold tracking-tight">Executive Board</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {executiveBoard.map((member) => (
            <div key={member.name} className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <Image
                src={member.image}
                alt={member.name}
                width={800}
                height={1000}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-foreground/90">{member.role}</p>
                <p className="text-foreground/80">{member.major}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


