import Image from "next/image";

import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { members } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Membros",
  description:
    "Lista de integrantes e tags históricas do clã FiReS-xXx com base em páginas arquivadas.",
  path: "/membros",
});

const dictionary = getDictionary("pt-BR");

export default function MembersPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-orange-300">
          Roster histórico
        </p>
        <h1 className="font-display text-4xl text-zinc-100">
          {dictionary.membersPage.title}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
          {dictionary.membersPage.description}
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.tag}
            className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900/80 shadow-xl"
          >
            <div className="relative aspect-video">
              <Image
                src={`https://i.ytimg.com/vi/${member.videoId}/hqdefault.jpg`}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h2 className="text-lg font-bold text-zinc-100">{member.name}</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-300">
                {member.tag}
              </p>
              <p className="text-sm text-zinc-300">
                {dictionary.membersPage.roleLabel}: {member.role}
              </p>
              <p className="text-sm text-zinc-300">
                {dictionary.membersPage.countryLabel}: {member.country}
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {dictionary.membersPage.noteLabel}: {member.note}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
