import Link from "next/link";
import ElectricBorder from "@/components/ElectricBorder";
import FuzzyText from "@/components/FuzzyText";

export default function StudentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-center text-urb-maize md:text-7xl font-semibold leading-[1.1] tracking-tight">
        F25 Rush
      </h1>
      <p className="mt-5 text-2xl md:text-3xl text-white text-center max-w-8xl mx-auto">
        UMich&apos;s first and only urban tech consulting organization wants to get to know you!
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="https://forms.gle/JfnygpzDKnZiBu5K6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">
          Interest Form
        </Link>
        <Link href="https://tally.so/r/3q94Y9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">
          Application
        </Link>
      </div>

      <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/T6N9qtlr7wg?autoplay=1&mute=1&playsinline=1"
            title="URB Consulting - F25 Rush"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Recruitment Timeline */}
      <section className="mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Recruitment Timeline</h2>

          {/* Open Rush */}
          <div className="mt-10 space-y-10">
            <h3 className="text-lg md:text-xl font-medium text-muted text-center">Open Rush</h3>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Wednesday 8/27</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Festifall</div>
                <p className="mt-2 text-sm md:text-base text-muted">2:00pm - 3:30pm</p>
                <p className="text-sm md:text-base text-muted">Table C019</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Come meet our members and ask any questions you might have!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Friday 8/29</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">General Meeting 1 (Hybrid)</div>
                <p className="mt-2 text-sm md:text-base text-muted">5:00pm - 7:00pm</p>
                <p className="text-sm md:text-base text-muted">North Quad 1175</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Please come to a General Meeting for your application to be considered!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Tuesday 9/2</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">General Meeting 2</div>
                <p className="mt-2 text-sm md:text-base text-muted">7:00pm - 9:00pm</p>
                <p className="text-sm md:text-base text-muted">Location TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">After this meeting, the application is due on Thursday 9/4 at 11:59pm!</p>
              </div>
            </div>

            {/* Application Due Callout */}
            <div className="rounded-2xl bg-urb-maize text-urb-blue p-6 text-center font-medium shadow-[0_0_0_1px_rgba(255,203,5,0.35)]">
              Application due 9/4 at 11:59pm
            </div>
          </div>

          {/* Closed Rush */}
          <div className="mt-12 space-y-10">
            <h3 className="text-lg md:text-xl font-medium text-muted text-center">Closed Rush</h3>

            

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Friday 9/5</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Optimization Challenge</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">Location TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Collaborate with teammates to craft a solution to a fun case study problem.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Monday 9/8</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Professional Development Event</div>
                <p className="mt-2 text-sm md:text-base text-muted">7:00pm - 9:00pm</p>
                <p className="text-sm md:text-base text-muted">NQ 2245</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Showcase your professional skills and your willingness to learn.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Wednesday 9/10</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Trivia Speed Dating</div>
                <p className="mt-2 text-sm md:text-base text-muted">6:00pm - 8:00pm</p>
                <p className="text-sm md:text-base text-muted">NQ 2245</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Trivia and Speed Dating combined??? Sounds like fun.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 items-stretch gap-4">
              <ElectricBorder className="p-6 bg-white/5 md:col-span-2">
                <div className="text-sm uppercase tracking-wide text-muted">Thursday 9/11, Friday 9/12</div>
                <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">Interviews</div>
                <p className="mt-2 text-sm md:text-base text-muted">Times TBD</p>
                <p className="text-sm md:text-base text-muted">Locations TBD</p>
              </ElectricBorder>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 md:col-span-1">
                <p className="text-sm md:text-base text-muted">Individual interviews will be offered to qualified applicants so that we can learn as much about you as we can.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-32 flex items-center justify-center">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
          RUSH URB
        </FuzzyText>
      </div>
    </main>
  );
}


