import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";
import TrainTimeline, { TrainGroup } from "@/components/TrainTimeline";

const timeline: TrainGroup[] = [
  {
    label: "Open Rush",
    stops: [
      {
        id: "kickoff",
        code: "Week 1 · TBD",
        title: "Rush Kickoff",
        time: "Time TBD",
        location: "Location TBD",
        description: "Come meet our members, tour past project work, and ask any questions you might have!",
      },
      {
        id: "gm1",
        code: "Week 1 · TBD",
        title: "General Meeting 1 (Hybrid)",
        time: "Time TBD",
        location: "Location / Zoom TBD",
        description: "Please attend a General Meeting for your application to be considered! We recommend attending in person.",
      },
      {
        id: "gm2",
        code: "Week 2 · TBD",
        title: "General Meeting 2 (Hybrid)",
        time: "Time TBD",
        location: "Location / Zoom TBD",
        description: "Your last chance to meet the team before applications close — bring your questions!",
      },
      {
        id: "app-due",
        code: "Week 2 · TBD",
        title: "Application Due",
        description: "Submit your application before the deadline to be considered for closed rush.",
        emphasis: true,
      },
    ],
  },
  {
    label: "Closed Rush",
    stops: [
      {
        id: "case-study",
        code: "Week 3 · TBD",
        title: "Case Study Workshop",
        time: "Time TBD",
        location: "Location TBD",
        description: "Work in a group to create and present a solution to a real urban technology problem.",
      },
      {
        id: "optimization",
        code: "Week 3 · TBD",
        title: "Optimization Challenge",
        time: "Time TBD",
        location: "Location TBD",
        description: "Hope you know how to make paper planes...",
      },
      {
        id: "speed-dating",
        code: "Week 3 · TBD",
        title: "Speed Dating",
        time: "Time TBD",
        location: "Location TBD",
        description: "Prepare to answer some ridiculous questions (and also have a great time).",
      },
      {
        id: "coffee-chats",
        code: "Week 4 · TBD",
        title: "Optional Coffee Chats",
        time: "Times vary",
        location: "Locations vary",
        description: "Coffee chat an URB member if you have any questions before interviews!",
      },
      {
        id: "interviews",
        code: "Week 4 · TBD",
        title: "Interviews",
        time: "Times vary",
        location: "Locations vary",
        description: "Individual interviews offered to qualified applicants so we can learn as much about you as we can.",
      },
    ],
  },
  {
    label: "Welcome Aboard",
    stops: [
      {
        id: "decisions",
        code: "Final Stop",
        title: "Decisions Released",
        description: "Welcome to URB Consulting — your first General Meeting as a member is right around the corner!",
        emphasis: true,
      },
    ],
  },
];

const studentHighlights = [
  {
    major: "Computer Science",
    blurb:
      "Ship real product features and data tools for urban tech clients — full-stack, client-facing work that's hard to find as an underclassman.",
    tags: ["Web/App Dev", "Data Viz"],
  },
  {
    major: "Political Science",
    blurb:
      "Translate policy and public-sector complexity into strategy recommendations that reach transit agencies, housing authorities, and city governments.",
    tags: ["Policy Research", "Public Sector"],
  },
  {
    major: "Industrial & Operations Engineering",
    blurb:
      "Apply optimization, process design, and data analysis to real logistics and infrastructure problems — not just case studies.",
    tags: ["Optimization", "Data Analysis"],
  },
  {
    major: "Ross (Business)",
    blurb:
      "Lead go-to-market, market entry, and growth strategy engagements for clients building the future of cities.",
    tags: ["Go-To-Market", "Strategy"],
  },
];

export default function F26RushPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Hero */}
      <div className="text-center">
        <div className="flex justify-center">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
            F26 Rush
          </FuzzyText>
        </div>
        <p className="mt-6 text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto">
          UMich&apos;s first and only urban tech consulting organization wants to get to know you!
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex cursor-not-allowed items-center rounded-full bg-white/10 text-white/50 font-medium px-5 py-3 ring-1 ring-white/10">
            Interest Form — Coming Soon
          </span>
          <span className="inline-flex cursor-not-allowed items-center rounded-full bg-white/10 text-white/50 font-medium px-5 py-3 ring-1 ring-white/10">
            Application — Coming Soon
          </span>
        </div>
        <p className="mt-4 text-sm text-muted">Full schedule and application links are on the way — check back soon!</p>
      </div>

      {/* Recruitment Timeline */}
      <section className="mt-20 md:mt-28">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">All Aboard: The F26 Rush Line</h2>
        <p className="mt-4 text-base md:text-lg text-muted text-center max-w-2xl mx-auto">
          Follow the line from open rush all the way to welcome aboard — scroll down to ride along.
        </p>
        <TrainTimeline groups={timeline} className="mt-16" />
      </section>

      {/* Student highlights */}
      <section className="mt-24 md:mt-32">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">Not an Urban Tech major? Good.</h2>
        <p className="mt-4 text-base md:text-lg text-muted text-center max-w-3xl mx-auto">
          Urban tech is interdisciplinary by nature. Whatever you study, there&apos;s a lane for you at URB.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {studentHighlights.map((s) => (
            <div key={s.major} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-urb-maize">{s.major}</h3>
              <p className="mt-3 text-sm md:text-base text-muted">{s.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          ...and Computer Science, Environment, Economics, Civil Engineering, Mathematics, UX Design, and more.
        </p>
      </section>

      {/* Closing CTA */}
      <div className="mt-32 flex flex-col items-center justify-center gap-6">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
          RUSH URB
        </FuzzyText>
        <Link
          href="/about"
          className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow"
        >
          Meet the team →
        </Link>
      </div>
    </main>
  );
}
