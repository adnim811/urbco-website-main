import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/TextType";
import Waves from "@/components/Waves";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header moved to global layout */}

      <main>
        
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-urb-blue/40 blur-[120px]" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="mt-5 text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                UMich&apos;s first and only urban technology consulting club
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted max-w-xl">
                We do meaningful work based around technology-driven solutions to problems in cities and the built environment. Ready to discover an emerging field, apply your unique skillset, and build meaningful connections? Apply to URB!
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/students" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">F25 Rush Page →</Link>
              </div>
              
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <Image src="/images/IMG_0545.JPG" alt="URB Consulting" width={1600} height={1200} className="w-full h-[380px] object-cover" priority />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <Image src="/images/20250402_070042_0095B9.JPEG" alt="Event" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-32 object-cover" />
                <Image src="/images/20250402_070042_0880A2.JPEG" alt="Workshop" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-32 object-cover" />
                <Image src="/images/20250402_070042_0998CA.JPEG" alt="Community" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-32 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* What is Urban Technology? */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 className="text-2xl md:text-7xl font-semibold tracking-tight mb-12">What is Urban Technology?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Company Logos */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/airbnb.png" 
                    alt="Airbnb" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/google.webp" 
                    alt="Google" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/microsoft.png" 
                    alt="Microsoft" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/waymo.png" 
                    alt="Waymo" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/lime.png" 
                    alt="Lime" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/arup.png" 
                    alt="Arup" 
                    width={120} 
                    height={60} 
                    className="max-w-full h-auto object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-foreground/90">
                Urban Technology is the use of tech products and services to solve problems related to cities and/or the built environment.
                <br /><br />
                 It&apos;s easiest to think of UT as an umbrella term that spans a cluster of industries and professions, including mobility (rideshare, AVs, micromobility), real estate (data centers, sustainability), placemaking (architecture, urban planning), policy, and digital design (UI/UX, dataviz).
                  Some familiar examples of urban tech in action are companies like Uber and Airbnb, or the public sector divisions of companies like Microsoft and Google.
                  <br /><br />
                  <div className="border-t border-white/10 my-4"></div>
                  <span className="text-urb-maize">The University of Michigan is the only university in the world containing an undergraduate degree in Urban Technology, 
                  and our club connects driven and entrepreneurial students with the professional world of this emerging field.</span>
              </p>
            </div>
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
              <TextType
                as="span"
                className="font-medium text-urb-maize"
                text={[
                  "Urban Technology.",
                  "Computer Science.",
                  "Industrial and Operations Engineering.",
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
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-semibold tracking-tight">What we do</h2>
          </div>

          {/* Client projects */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Meaningful client projects that help you develop skills for your resume and for life.
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
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Civic Tech</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Strategic Foresight</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Market Entry Strategy</span>
              </div>
            </div>
          </div>

          {/* Professional development */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Professional development opportunities for discovery and networking.
              </h3>
              <p className="text-base md:text-lg text-muted">
                We organize speaker events and treks involving leaders in the urban tech world, ranging from industry vets to startup founders. At our trek to startup hub Newlab Detroit last year, we met 5 startups and their founders, who gave us insights on how to win in this emerging field
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Image src="/images/IMG_0545.JPG" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/IMG_0300.jpeg" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/IMG_0296.jpeg" alt="Professional development" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
              </div>
            </div>
          </div>

          {/* Social events */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Mixers, tailgates, and other events with clubs across campus.
              </h3>
              <p className="text-base md:text-lg text-muted">
                The normal rhythm of internal club meetings and events along with the external events we organize give our members the opportunity to form close social bonds and find a community with like-minded people.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Image src="/images/IMG_9783 (1).JPG" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/20250402_070042_0556C5.JPEG" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/20250402_070042_0998CA.JPEG" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* F25 Rush CTA */}
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center overflow-hidden">
            <Waves className="pointer-events-none" lineColor="rgba(255,255,255,0.15)" backgroundColor="transparent" />
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Interested? <br /><br />Come meet us at our recruitment events and apply! Visit our F25 Rush page now for our recruitment timeline and our application.
            </h3>
            <div className="mt-6">
              <Link href="/students" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(230,180,0,1)] hover:shadow-[0_0_0_3px_rgba(230,180,0,0.6)] transition-shadow">F25 Rush Page →</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer moved to global layout */}
    </div>
  );
}
