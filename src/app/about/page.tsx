import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <h1 className="text-4xl text-white md:text-7xl font-semibold leading-[1.1] tracking-tight">
        What is URB Consulting?
      </h1>
      
      {/* Intro + Executive Board */}
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-foreground/90">
            URB Consulting is rooted in the University of Michigan’s Urban Technology program. 
            There existed a need for students in the Urban Tech program to gain professional experience, 
            but, considering the fact that the program was just in its infancy and had no graduates yet, 
            it wasn&apos;t particularly clear what that might look like. So, we set out to create those opportunities 
            ourselves.
            <br /><br />
            Now, we are proudly associated with the Taubman College of Architecture and Urban Planning, 
            the School of Information, and the College of Engineering, and we recruit members from across the 
            University&apos;s 19 colleges. Our strength is rooted in this diversity of backgrounds, with current members 
            having experience with a broad variety of roles/companies:
            <br /><br />
            • Technical Program Management at Microsoft<br />
            • Logistics at GE<br />
            • Strategy at General Motors<br />
            • Real Estate Development at McDonald&apos;s<br />
            • Product at various real estate startups<br />
            • Software Engineering at CGI Consulting<br />
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Image src="/images/about_pics/URB_group_photo.JPG" alt="URB Consulting executive board" width={1600} height={1066} className="w-full h-80 md:h-[420px] object-cover" />
        </div>
      </section>
    </main>
  );
}


