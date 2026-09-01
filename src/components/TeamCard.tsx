import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  major: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
  linkedin?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      {member.image ? (
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            style={{
              objectPosition: member.imagePosition,
              transform: member.imageScale ? `scale(${member.imageScale})` : undefined,
            }}
          />
        </div>
      ) : (
        <div className="w-full h-64 flex items-center justify-center bg-white/5">
          <div className="h-20 w-20 rounded-full bg-urb-maize flex items-center justify-center text-urb-blue font-extrabold text-2xl">
            {initials(member.name)}
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg">{member.name}</h3>
        <p className="mt-1 text-xs font-mono uppercase tracking-wide text-urb-maize">{member.role}</p>
        <p className="mt-1 text-xs text-muted">{member.major}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-blue-400 hover:underline"
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
