import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About URB Consulting</h1>
        <p className="mt-4 text-muted">
          We are the first and only urban technology consulting organization at the University of Michigan.
        </p>
      </header>
      
      {/* Intro + Executive Board */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-foreground/90">
            URB Consulting is rooted in the University of Michigan’s Urban Technology program and proudly brings together students from across colleges and disciplines. We create professional opportunities in the emerging field of urban technology by pairing civic-minded clients with student teams who care deeply about cities and the people who live in them.
          </p>
          <p className="text-foreground/90">
            Our work is interdisciplinary—spanning strategy, UX design, sustainability, policy, and foresight. We move quickly, are ambitious in our goals, and hold ourselves to a high bar for quality. Every engagement is a chance to deliver meaningful results while building the next generation of urban-tech leaders.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Image src="/images/4Q4A2972.jpg" alt="URB Consulting executive board" width={1600} height={1066} className="w-full h-80 md:h-[420px] object-cover" />
        </div>
      </section>
      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Mission</div>
          <p className="mt-2 text-sm text-muted">Empower civic organizations with thoughtful, human-centered, and data-informed work.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Community</div>
          <p className="mt-2 text-sm text-muted">A cohort of students passionate about cities, mobility, housing, and sustainability.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Development</div>
          <p className="mt-2 text-sm text-muted">Workshops, mentorship, and hands-on projects every semester.</p>
        </div>
      </section>
    </main>
  );
}


