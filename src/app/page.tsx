import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/TextType";
import Waves from "@/components/Waves";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header moved to global layout */}

      <main>
        
        {/* Hero */}
        <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh]">
          <Image
            src="/images/URB_heroshot.JPG"
            alt="URB Consulting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-100 md:pb-10 flex items-center justify-center">
            <div className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-background/75 backdrop-blur-sm px-6 py-6 md:px-10 md:py-8 text-center shadow-lg shadow-black/10">
              <h1 className="mt-2 text-4xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                UMich&apos;s first and only <br/>urban technology consulting club
              </h1>
              <p className="mt-5 text-base md:text-lg">
                We solve difficult problems for organizations that do technology-driven work in
                cities and the built environment. Ready to discover an emerging field,
                apply your unique skillset, and build meaningful connections? Apply to URB!
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link href="/students" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">F25 Rush Page →</Link>
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
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/airbnb.png" 
                    alt="Airbnb" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity transform scale-85" 
                  />
                </div>
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/google.webp" 
                    alt="Google" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity transform scale-90" 
                  />
                </div>
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/microsoft.png" 
                    alt="Microsoft" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity transform scale-85" 
                  />
                </div>
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/waymo.png" 
                    alt="Waymo" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/lime.png" 
                    alt="Lime" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="relative h-28 md:h-32 flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <Image 
                    src="/images/company_logos/arup.png" 
                    alt="Arup" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain filter opacity-80 hover:opacity-100 transition-opacity" 
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
              </p>
              <div className="border-t border-white/10 my-4"></div>
              <p className="text-base md:text-lg text-foreground/90">
                <span className="text-urb-maize">The University of Michigan is the only university in the world containing an undergraduate degree in Urban Technology. 
                URB Consulting connects driven and entrepreneurial students interested in Urban Tech with the professional world of this emerging field.</span>
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
              <ClientOnly>
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
              </ClientOnly>
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
                <Image src="/images/blue_team.jpeg" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
                <Image src="/images/20250402_070042_0998CA.JPEG" alt="Social events" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* F25 Rush CTA */}
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 text-center overflow-hidden">
            <ClientOnly>
              <Waves className="pointer-events-none" lineColor="rgba(255,255,255,0.15)" backgroundColor="transparent" />
            </ClientOnly>
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
