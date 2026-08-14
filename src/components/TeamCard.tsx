import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  major: string;
  interest: string;
  tools: string[];
  image: string;
  linkedin: string;
};

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <div className="relative w-full h-64">
        <Image src={member.image} alt={member.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg">{member.name}</h3>
        <p className="mt-1 text-xs font-mono uppercase tracking-wide text-urb-maize">{member.role}</p>
        <p className="mt-1 text-xs text-muted">{member.major}</p>
        <p className="mt-2 text-sm text-muted">{member.interest}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.tools.map((tool) => (
            <span key={tool} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-mono text-muted">
              {tool}
            </span>
          ))}
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-blue-400 hover:underline"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}
