export default function ClientsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">For Clients</h1>
        <p className="mt-4 text-muted">
          Partner with a student consulting team to advance your mission. We deliver research, product strategy, and data-driven insights.
        </p>
      </header>
      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Research</div>
          <p className="mt-2 text-sm text-muted">Stakeholder interviews, surveys, and usability testing.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Strategy</div>
          <p className="mt-2 text-sm text-muted">Opportunity sizing, roadmaps, and success metrics.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-lg font-semibold">Data</div>
          <p className="mt-2 text-sm text-muted">Analysis, dashboards, and spatial visualization.</p>
        </div>
      </section>
      <section className="mt-12">
        <a href="mailto:hello@urbconsulting.org" className="inline-flex items-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Start a project</a>
      </section>
    </main>
  );
}


