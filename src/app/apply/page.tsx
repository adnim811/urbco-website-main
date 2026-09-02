import SectionHeading from "@/components/SectionHeading";
import Script from "next/script";

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="F26 Rush"
        title="Apply to URB!"
      />
      <div className="mt-10 overflow-hidden rounded-2xl bg-[#1a202c] p-4 sm:p-6">
        <iframe
          data-tally-src="https://tally.so/embed/9qKRqV?alignLeft=1&hideTitle=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="457"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Test form"
        />
      </div>
      <p className="mt-4 text-center text-sm text-white/60">
        If the application doesn&apos;t load,{" "}
        <a
          href="https://tally.so/r/9qKRqV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-urb-maize underline underline-offset-4 hover:text-white"
        >
          open it directly
        </a>
        .
      </p>
      <Script id="tally-embed-loader" strategy="afterInteractive">
        {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc})};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}`}
      </Script>
    </main>
  );
}
