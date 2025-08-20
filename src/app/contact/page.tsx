export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-muted">Send a message to our executive board!</p>
      </header>
      <section className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        <form action="https://formspree.io/f/xbldvzgo" method="POST" className="grid gap-4">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
          <input name="email" type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
          <textarea name="message" required placeholder="How can we help?" rows={6} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-urb-maize/60" />
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-urb-maize text-urb-blue font-medium px-5 py-3 w-fit shadow-[0_0_0_1px_rgba(255,203,5,0.3)] hover:shadow-[0_0_0_3px_rgba(255,203,5,0.2)] transition-shadow">Send</button>
        </form>
        <div className="text-sm text-muted">
          <div className="font-medium text-foreground">Email</div>
          <a className="hover:text-foreground" href="mailto:urbconsulting@gmail.com">urbconsulting@gmail.com</a>
          <div className="mt-6 font-medium text-foreground">Social</div>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}


