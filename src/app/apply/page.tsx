import SectionHeading from "@/components/SectionHeading";

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="F26 Rush"
        title="Apply to URB"
        subtitle="Fill out the form below to get started — no need to leave the site. Questions? Reach us at urbumich@gmail.com."
      />
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <iframe
          src="https://tally.so/embed/A7p7Xz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          title="URB Consulting Application"
          loading="lazy"
          className="w-full"
          style={{ height: "1200px", border: "none" }}
        />
      </div>
    </main>
  );
}
