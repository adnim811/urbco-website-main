import SectionHeading from "@/components/SectionHeading";
import ProjectsFilter from "@/components/ProjectsFilter";
import CityMap from "@/components/CityMap";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="Select Work"
        title="Case studies, by domain"
        subtitle="A sample of the strategy, product, and engineering work our teams have delivered for clients across the urban tech landscape."
      />

      <div className="mt-12">
        <ProjectsFilter />
      </div>

      <section className="mt-24 md:mt-28">
        <SectionHeading eyebrow="Our Past Clients" title="The project map" subtitle="Hover a city for project details." />
        <div className="mt-8">
          <CityMap />
        </div>
      </section>
    </main>
  );
}
