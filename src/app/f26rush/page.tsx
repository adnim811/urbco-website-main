import Link from "next/link";
import FuzzyText from "@/components/FuzzyText";
import TrainTimeline, { TrainGroup } from "@/components/TrainTimeline";
import TextType from "@/components/TextType";
import ClientOnly from "@/components/ClientOnly";

const timeline: TrainGroup[] = [
  {
    label: "Open Rush",
    stops: [
      {
        id: "festifall-north",
        code: "Mon · Aug 31",
        title: "Festifall North",
        time: "Time TBD",
        location: "Location TBD",
        description: "Come find us roaming Festifall North to learn more about URB!",
      },
      {
        id: "festifall",
        code: "Wed · Sep 2",
        title: "Festifall Central",
        time: "3–5pm",
        location: "Table C-44, the Diag",
        description: "Come to our Festifall table to meet URB members and learn about what we do!",
      },
      {
        id: "gm1",
        code: "Fri · Sep 4",
        title: "General Meeting 1 (Hybrid)",
        time: "5–7pm",
        location: "NQ 2255",
        description: "Come to a general meeting to learn what URB has planned for the semester and meet a ton of our members. Attending a general meeting in-person is HIGHLY recommended!",
      },
      {
        id: "gm2",
        code: "Tue · Sep 8",
        title: "General Meeting 2 (Hybrid)",
        time: "6–8pm",
        location: "NQ 2255",
        description: "Final opportunity to meet the team and ask questions before applications close.",
      },
      {
        id: "app-due",
        code: "Thu · Sep 10",
        title: "Application Due",
        time: "11:59pm",
        location: "urbumich.com/apply",
        href: "https://urbumich.com/apply",
        description: "Submit your application before the deadline to be considered for closed rush.",
        emphasis: true,
      },
    ],
  },
  {
    label: "Closed Rush",
    stops: [
      {
        id: "optimization",
        code: "Fri · Sep 11",
        title: "Optimization Challenge",
        time: "Time TBD",
        location: "Location TBD",
        description: "Does your team have what it takes to fly? This challenge will push you to solve a fun business problem with fellow rushees.",
      },
      {
        id: "speed-dating",
        code: "Mon · Sep 14",
        title: "Speed Dating",
        time: "TBD (2 sessions)",
        location: "Location TBD",
        description: "Answer a barrage of fun questions from URB members.",
      },
      {
        id: "slideshow-karaoke",
        code: "Thu · Sep 17",
        title: "Slideshow Karaoke",
        time: "TBD (2 sessions)",
        location: "Location TBD",
        description: "Show off your impromptu presentation and collaboration skills!",
      },
      {
        id: "case-study",
        code: "Mon · Sep 21",
        title: "Professional Development Event",
        time: "Time TBD",
        location: "Location TBD",
        description: "Work in a group to create and present a solution to a real urban technology problem.",
      },
      {
        id: "coffee-chats",
        code: "Wed · Sep 23 · Optional",
        title: "Optional Coffee Chats",
        time: "Times vary",
        location: "Locations vary",
        description: "An optional opportunity to speak with an URB member ahead of interviews.",
      },
      {
        id: "interviews",
        code: "Week 4 · TBD",
        title: "Interviews",
        time: "Times vary",
        location: "Locations vary",
        description: "Individual interviews offered to qualified applicants so we can learn as much about you as we can.",
      },
      {
        id: "decisions",
        code: "Final Stop",
        title: "Decisions Released",
        description: "Welcome to URB Consulting!",
        emphasis: true,
      },
    ],
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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_oYZDCmPuZW4uZrw5hjEQI5K_2umwy_V5C0tYw4y9y3a5Qw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow"
          >
            Interest Form
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center rounded-full bg-white/10 text-white font-medium px-5 py-3 ring-1 ring-white/20 hover:bg-white/15 hover:ring-white/30 transition-colors"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Recruitment Timeline */}
      <section className="mt-20 md:mt-28">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">All Aboard: The F26 Rush Line</h2>
        <TrainTimeline groups={timeline} className="mt-16" />
      </section>

      {/* Majors diversity */}
      <section className="mt-24 md:mt-32">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Not familiar with urban tech? No problem! We look for <span className="text-urb-maize">problem-solvers</span> from a wide variety of majors!
     
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted max-w-7xl">
          We value members with unique perspectives, a bias to action, and an ambition to solve problems, regardless of major and level of familiarity with urban tech. We encourage anyone interested to apply!
        </p>
        <div className="mt-6 text-xl md:text-3xl text-foreground/90">
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
      </section>

      {/* Closing CTA */}
      <div className="mt-32 flex flex-col items-center justify-center gap-6">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
          RUSH URB
        </FuzzyText>
      </div>
    </main>
  );
}
