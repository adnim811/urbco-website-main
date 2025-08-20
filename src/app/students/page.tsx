import Image from "next/image";

export default function StudentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">For Students</h1>
        <p className="mt-4 text-muted">
          Our club offers three main opportunities for students: hands-on client projects, professional development, and a welcoming calendar of social events.
        </p>
      </header>
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Client Projects</div>
          <p className="mt-2 text-sm text-muted">Work with real organizations on urban tech challenges—build portfolios through research, strategy, and implementation.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Professional Development</div>
          <p className="mt-2 text-sm text-muted">Level up with workshops, mentorship, resume and portfolio reviews, and recruiting prep tailored to urban technology careers.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Social Events</div>
          <p className="mt-2 text-sm text-muted">Join a tight-knit community through mixers, retreats, and campus events—make friends and expand your network.</p>
        </div>
      </section>
      
      {/* Client Projects */}
      <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Client projects</h2>
          <p className="text-muted">Consultants and project managers partner with mission-driven teams to deliver research, product strategy, and data insights that make a civic impact.</p>
          <ul className="list-disc list-inside text-sm text-muted/90 space-y-2">
            <li>Work directly with stakeholders and users</li>
            <li>Build case studies for your portfolio</li>
            <li>Practice consulting fundamentals: scoping, synthesis, delivery</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/76702894576__AF1B067D-8AB1-467E-A241-196F769ACD27.jpeg" alt="Client workshop" width={1200} height={900} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
          <Image src="/images/IMG_0218.JPG" alt="Team presenting" width={1200} height={900} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
        </div>
      </section>

      {/* Professional Development */}
      <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 grid grid-cols-3 gap-4">
          <Image src="/images/IMG_0296.jpeg" alt="Workshop" width={1000} height={750} className="rounded-xl ring-1 ring-white/10 w-full h-28 md:h-40 object-cover" />
          <Image src="/images/IMG_0300.jpeg" alt="Mentorship" width={1000} height={750} className="rounded-xl ring-1 ring-white/10 w-full h-28 md:h-40 object-cover" />
          <Image src="/images/IMG_0635.JPG" alt="Career event" width={1000} height={750} className="rounded-xl ring-1 ring-white/10 w-full h-28 md:h-40 object-cover" />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Professional development</h2>
          <p className="text-muted">We invest in your growth through skill-building and mentorship designed for urban technology careers in research, product, policy, and data.</p>
          <ul className="list-disc list-inside text-sm text-muted/90 space-y-2">
            <li>Hands-on workshops and tool walkthroughs</li>
            <li>Resume, portfolio, and case review sessions</li>
            <li>Alumni and industry speaker series</li>
          </ul>
        </div>
      </section>

      {/* Social Events */}
      <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Social events</h2>
          <p className="text-muted">URB is a friendly, supportive community. We host socials, retreats, and campus events where you can meet collaborators and friends.</p>
          <ul className="list-disc list-inside text-sm text-muted/90 space-y-2">
            <li>Welcome mixers and member dinners</li>
            <li>Retreats and end-of-semester celebrations</li>
            <li>Joint events with campus partners</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/IMG_9783 (1).JPG" alt="Social event" width={1200} height={900} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
          <Image src="/images/IMG_0723.JPG" alt="Community hangout" width={1200} height={900} className="rounded-xl ring-1 ring-white/10 w-full h-48 md:h-64 object-cover" />
        </div>
      </section>
      <section className="mt-16 md:mt-24">
        <a href="mailto:hello@urbconsulting.org" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Apply or ask a question</a>
      </section>
    </main>
  );
}


