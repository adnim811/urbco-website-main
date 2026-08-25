import Image from "next/image";
import Link from "next/link";
import { Bus, Home as HomeIcon, Zap, Database, Landmark, Settings2, Code2, TrendingUp } from "lucide-react";
import TextType from "@/components/TextType";
import Waves from "@/components/Waves";
import ClientOnly from "@/components/ClientOnly";
import LogoLoop from "@/components/LogoLoop";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import MajorCard from "@/components/MajorCard";
import TestimonialCard from "@/components/TestimonialCard";

const domainTags = [
  { label: "Mobility", icon: Bus },
  { label: "Housing", icon: HomeIcon },
  { label: "Energy", icon: Zap },
  { label: "Policy & Data", icon: Database },
];

const majors = [
  {
    label: "Poli Sci",
    heading: "Policy meets product",
    description:
      "Translate zoning codes, transit funding, and regulatory context into strategy clients can actually act on.",
    icon: Landmark,
  },
  {
    label: "IOE",
    heading: "Systems thinking, applied",
    description:
      "Run process mapping, ops analysis, and optimization frameworks against real infrastructure and logistics problems.",
    icon: Settings2,
  },
  {
    label: "Computer Science",
    heading: "Ship, don't simulate",
    description:
      "Build lightweight tools, dashboards, and prototypes for clients who need something working, not just a slide.",
    icon: Code2,
  },
  {
    label: "Ross",
    heading: "Strategy with a P&L lens",
    description:
      "Lead market entry, GTM, and financial modeling work for companies operating in the built environment.",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote:
      "URB gave me the confidence to lead a team of people with completely different strengths and approaches, and to genuinely value what each of them brought to the table. That independence carried straight into my first internship, where I could take ownership of my work from day one. Beyond the resume line, URB gave me a community I still lean on for everything from career advice to dinner plans.",
    name: "Yoshi Sarkar",
    detail: "IOE, 2029",
    image: "/images/about_pics/headshots/yoshi.png",
  },
  {
    quote:
      "URB's culture of kindness paired with high expectations makes it the best filter for meeting genuinely interesting, capable people. Some of my closest friends at Michigan came from my project team. Analyst development reshaped how I think about professionalism, from resume building to communication skills, while connecting me with people in my major who could help with coursework. Joining URB has been nothing but a win.",
    name: "Henry Parker",
    detail: "Urban Technology, 2029",
    image: "/images/about_pics/headshots/henry.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header moved to global layout */}

      <main>

        {/* Hero */}
        <section className="relative w-full overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-end md:items-center">
          <Image
            src="/images/URB_heroshot.JPG"
            alt="URB Consulting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-background/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-[0.15em] text-urb-maize">
                <span className="h-2 w-2 rounded-full bg-urb-maize" />
                UMich&apos;s first urban tech consultancy
              </div>
              <h1 className="mt-4 text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white">
                Where cities <span className="text-urb-maize">meet</span> code, capital &amp; policy.
              </h1>
              <p className="mt-5 text-base md:text-lg text-foreground/90">
                URB Consulting delivers pro-bono strategy work for organizations building the
                technology layer of cities: mobility, housing, energy, and the platforms that
                connect them.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/apply" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Apply Now →</Link>
                <Link href="/projects" className="inline-flex items-center rounded-full border border-white/25 text-white font-medium px-5 py-3 hover:bg-white/10 transition-colors">See Our Work</Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                {domainTags.map(({ label, icon: Icon }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-muted">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact metrics */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Impact, to date" title="The route so far" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-urb-maize">
                <AnimatedCounter value={12} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-muted">Cities touched</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-urb-maize">
                <AnimatedCounter value={8} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-muted">Client engagements</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-urb-maize">
                <AnimatedCounter value={40} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-muted">Active members</p>
            </div>
          </div>
        </section>

        {/* What is Urban Technology? */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="The Field" title="What is Urban Technology?" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with Caption */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[18/16] rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image 
                  src="/images/viewfromJPMC.JPG" 
                  alt="View from JPMorgan Chase" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
              <p className="text-sm text-muted text-center">The view from our F25 visit to JPMorganChase&apos;s new HQ in NYC!</p>
            </div>
            
            {/* Text Content */}
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-foreground/90">
                Urban Technology is technology that spans the digital and physical worlds. Think of platforms like Uber, Google Maps, and Airbnb; and industries like real estate, mobility, and energy.
                <br /><br />
                 At URB Consulting, we do interdisciplinary projects for urban technology companies and institutions. These projects, which span strategy, software engineering, policy research, UX design, 
                 and more, give you the opportunity to provide real business value while developing a wide variety of skills that will help you launch your career.
              </p>
              <div className="border-t border-white/10 my-4"></div>
              <p className="text-base md:text-lg text-foreground/90">
                <span className="text-urb-maize">URB is the only consulting group operating in this niche! Apply if you want to develop transferrable skills 
                  for any career, forge connections across both burgeoning industries and long-standing companies, and join a community that will make your college experinece meaningful!</span>
              </p>
            </div>
          </div>
        </section>

        
        {/* What We Do */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How We Help" title="What we do" className="mb-12" />

          {/* Client projects */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                <span className="text-urb-maize">Client projects</span> that help you develop skills for your resume and for life.
              </h3>
              <p className="text-base md:text-lg text-muted">
                Our client projects will help you develop the interdisciplinary skills needed for your professional aspirations.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Go-To-Market</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">UX Design</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Data Visualization</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Policy Research</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Product Strategy</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Data Analysis</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Web/App Development</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Market Entry</span>
              </div>
            </div>
          </div>

          {/* Professional development */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                <span className="text-urb-maize">Professional development</span> opportunities for discovery and networking.
              </h3>
              <p className="text-base md:text-lg text-muted">
                URB members attend professional treks and speaker events with industry-leading individuals and companies in consulting and urban tech. We plan these engagements with one goal in mind: to help you learn as much as possible.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Image src="/images/jpmcf25.jpeg" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                  <p className="mt-3 text-sm text-muted">JPMorganChase NYC HQ Visit, F25</p>
                </div>
                <div>
                  <Image src="/images/newlabf25.jpeg" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                  <p className="mt-3 text-sm text-muted">Newlab Brooklyn Startup Incubator Visit, F25</p>
                </div>
                <div>
                  <Image src="/images/IMG_0545.JPG" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                  <p className="mt-3 text-sm text-muted">Newlab Detroit Networking Day, W25</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social events */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                A <span className="text-urb-maize">community</span> of friends that will amplify your UMich experience!
              </h3>
              <p className="text-base md:text-lg text-muted">
                We prioritize our community above all else. Join URB and meet your new best friends!
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Image src="/images/pic1.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/pic2.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/pic3.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/pic4.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/pic5.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/pic6.JPEG" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Companies we've worked with */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Our Partners" title="Companies we've worked with" className="mb-12" />
          <div className="relative" style={{ height: '120px' }}>
            <LogoLoop
              logos={[
                { src: "/images/company_logos/microsoft.png", alt: "Microsoft" },
                { src: "/images/company_logos/bofa.png", alt: "BofA" },
                { src: "/images/company_logos/adobe.png", alt: "Adobe" },
                { src: "/images/company_logos/accenture.png", alt: "Accenture" },
                { src: "/images/company_logos/baringa.png", alt: "Baringa" },
                { src: "/images/company_logos/fti.jpg", alt: "FTI" },
                { src: "/images/company_logos/datadog.svg", alt: "Datadog" },
                { src: "/images/company_logos/colliers.png", alt: "Colliers" },
                { src: "/images/company_logos/lucid.jpg", alt: "Lucid" },
                { src: "/images/company_logos/coinbase.jpg", alt: "Coinbase" },
                { src: "/images/company_logos/smbc.webp", alt: "SMBC" },
                { src: "/images/company_logos/kpmg.webp", alt: "KPMG" },
                { src: "/images/company_logos/ally.png", alt: "Ally" },
                { src: "/images/company_logos/ubs.png", alt: "UBS" },
                { src: "/images/company_logos/mcdonalds.webp", alt: "McDonald's" },
                { src: "/images/company_logos/qualcomm.png", alt: "Qualcomm" },
                { src: "/images/company_logos/aecom.jpg", alt: "AECOM" },
                { src: "/images/company_logos/southwest.jpg", alt: "Southwest" },
                { src: "/images/company_logos/brookfield.jpg", alt: "Brookfield" },
                { src: "/images/company_logos/brookings.webp", alt: "Brookings" },
                { src: "/images/company_logos/hanbury.png", alt: "Hanbury" },
                { src: "/images/company_logos/gm.png", alt: "GM" },
              ]}
              speed={80}
              direction="left"
              logoHeight={80}
              gap={60}
              hoverSpeed={20}
              fadeOut
              fadeOutColor="#070A0F"
              scaleOnHover
              ariaLabel="Companies and organizations we've worked with"
            />
          </div>
        </section>

        {/* Majors diversity */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight">
              We seek out prospective members from a wide variety of majors!
            </h2>
            <p className="text-base md:text-lg text-muted max-w-7xl">
              Due to the interdisciplinary nature of urban technology, 
              we value students with diverse educational backgrounds that bring unique skillsets and intuitions to their work. 
              If you are interested in URB but don&apos;t think your major relates to our purpose and operations, we encourage you to still apply! 
            </p>
            <div className="text-xl md:text-3xl text-foreground/90">
              <span>Our current members are majoring in </span>
              <ClientOnly>
                <TextType
                  as="span"
                  className="font-medium text-urb-maize"
                  text={[
                    "Urban Technology.",
                    "Computer Science.",
                    "Business.",
                    "Industrial and Operations Engineering.",
                    "Information Analysis.",
                    "Environment.",
                    "Economics.",
                    "Civil Engineering.",
                    "Mathematics.",
                    "UX Design.",
                  ]}
                  typingSpeed={55}
                  deletingSpeed={55}
                  pauseDuration={3000}
                  variableSpeed={{ min: 35, max: 75 }}
                  cursorCharacter="|"
                  textColors={["#FFCB05"]}
                  cursorClassName="ml-1"
                  showCursor
                  loop
                />
              </ClientOnly>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-urb-maize">
              <span className="h-2 w-2 rounded-full bg-urb-maize" />
              Not an urban tech major? Good.
            </div>
            <h3 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight text-white">Built for interdisciplinary minds</h3>
            <p className="mt-3 text-base md:text-lg text-muted max-w-2xl">
              Every case team pulls from multiple majors. Here&apos;s what URB looks like from where you&apos;re standing.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {majors.map((major) => (
                <MajorCard key={major.label} major={major} />
              ))}
            </div>
          </div>
        </section>

        {/* Member testimonials */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Member Voices" title="Hear from our members" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* F26 Rush CTA */}
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center overflow-hidden">
            <ClientOnly>
              <Waves className="pointer-events-none" lineColor="rgba(255,255,255,0.15)" backgroundColor="transparent" />
            </ClientOnly>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Interested? <br /><br />Rush URB next semester :)
            </h3>
            <div className="mt-6">
              <Link href="/f26rush" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(230,180,0,1)] hover:shadow-[0_0_0_3px_rgba(230,180,0,0.6)] transition-shadow">F26 Rush Page →</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer moved to global layout */}
    </div>
  );
}
