import SectionHeading from "@/components/SectionHeading";
import { EyeClosed } from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="F26 Rush"
        title="Apply to URB"
      />
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <EyeClosed className="mx-auto mb-4 h-10 w-10 text-urb-maize" aria-hidden />
        <p className="text-xl md:text-2xl font-semibold text-white">
          Come back soon to apply!
        </p>
      </div>
    </main>
  );
}
