import Image from "next/image";
import Link from "next/link";

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
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                First and only at U-M
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-urb-maize" />
                Urban Technology Consulting
              </p>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
                Pro-bono consulting at the intersection of cities and technology
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted max-w-xl">
                We partner with public agencies, nonprofits, and mission-driven teams to deliver meaningful outcomes while developing the next generation of urban tech leaders.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/clients" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Start a project</Link>
                <Link href="/students" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-foreground/90 hover:bg-white/5 transition-colors">Join URB</Link>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-muted">
                <div>
                  <div className="text-2xl font-semibold text-foreground">25+</div>
                  Student consultants
                </div>
                <div>
                  <div className="text-2xl font-semibold text-foreground">10+</div>
                  Projects delivered
                </div>
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

        {/* About */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About URB Consulting</h2>
              <p className="mt-3 text-muted">University of Michigan</p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-foreground/90">
                URB Consulting is the first and only student organization at U-M dedicated to the intersection of cities and technology. We help clients tackle urban challenges with thoughtful research, product strategy, and data-driven analysis.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <div className="text-lg font-semibold">Pro-bono impact</div>
                  <p className="mt-2 text-sm text-muted">High-quality work for public sector and mission-driven clients.</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <div className="text-lg font-semibold">Professional growth</div>
                  <p className="mt-2 text-sm text-muted">Workshops and mentorship to build consulting and product skills.</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <div className="text-lg font-semibold">Community</div>
                  <p className="mt-2 text-sm text-muted">A supportive group of students passionate about urban technology.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What we do</h2>
            <p className="mt-4 text-muted">Our work spans research, product, and data—tailored to each client.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-lg font-semibold">User & stakeholder research</div>
              <p className="mt-2 text-sm text-muted">Interviews, surveys, journey mapping, and synthesis to uncover insights.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-lg font-semibold">Product strategy</div>
              <p className="mt-2 text-sm text-muted">Problem framing, opportunity sizing, roadmaps, and success metrics.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="text-lg font-semibold">Data & mapping</div>
              <p className="mt-2 text-sm text-muted">Data analysis, dashboards, and spatial visualization to guide decisions.</p>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Clients & partners</h2>
              <p className="text-muted">We work with civic organizations, public agencies, and nonprofits in mobility, housing, sustainability, and more.</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">City departments</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Transit agencies</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Nonprofits</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Campus partners</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image src="/images/20250402_070042_0556C5.JPEG" alt="Client work" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-28 object-cover" />
              <Image src="/images/20250402_064315_0A2A5C.JPEG" alt="Client work" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-28 object-cover" />
              <Image src="/images/20250402_070042_0ED2AA.JPEG" alt="Client work" width={800} height={600} className="rounded-xl ring-1 ring-white/10 w-full h-28 object-cover" />
            </div>
          </div>
        </section>

        {/* Join */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Join URB Consulting</h3>
                <p className="mt-3 text-muted">Recruitment opens each semester for consultants, project managers, and operations roles.</p>
                <div className="mt-6 flex gap-3">
                  <a href="#contact" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Express interest</a>
                  <a href="#" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-foreground/90 hover:bg-white/5 transition-colors">View roles</a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <Image src="/images/20250402_070042_0998CA.JPEG" alt="Recruitment" width={1200} height={900} className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Start a project with us</h2>
              <p className="mt-3 text-muted">Tell us about your goals, and we’ll follow up within a few days.</p>
              <form action="https://formspree.io/f/xbldvzgo" method="POST" className="mt-8 grid gap-4">
                <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
                <input name="email" type="email" required placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
                <textarea name="message" required placeholder="How can we help?" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 w-fit shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Send</button>
              </form>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <Image src="/images/20250402_070042_0880A2.JPEG" alt="Contact URB" width={1200} height={900} className="w-full h-96 object-cover" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer moved to global layout */}
    </div>
  );
}
