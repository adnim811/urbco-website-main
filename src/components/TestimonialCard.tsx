import Image from "next/image";
import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  image?: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <Quote className="h-6 w-6 text-urb-maize" />
      <p className="mt-4 text-base md:text-lg text-foreground/90 leading-relaxed">{testimonial.quote}</p>
      <div className="mt-6 flex items-center gap-3">
        {testimonial.image && (
          <div className="relative h-11 w-11 rounded-full overflow-hidden ring-1 ring-white/10 shrink-0">
            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-xs font-mono uppercase tracking-wide text-muted">{testimonial.detail}</p>
        </div>
      </div>
    </div>
  );
}
