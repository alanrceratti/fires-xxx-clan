import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/i18n/dictionary";
import {
  archiveLinks,
  members,
  overviewStats,
  timeline,
  videos,
} from "@/lib/site-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Início",
  description:
    "Arquivo visual do clã FiReS-xXx com vídeos históricos, membros e fontes da cena Worms 4 Mayhem.",
  path: "/",
});

const dictionary = getDictionary("pt-BR");

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="animate-fade-up relative overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950 p-6 shadow-2xl sm:p-8 lg:p-12">
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://i.ytimg.com/vi/xv6y2nW2Z6k/hqdefault.jpg"
            alt="Worms 4 Mayhem PRO {FiReS-xXx}"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

        <div className="relative z-10 max-w-2xl space-y-5">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-orange-300">
            {dictionary.home.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            {dictionary.home.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            {dictionary.home.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={dictionary.home.hero.primaryHref}
              className="rounded-full border border-orange-300/80 bg-orange-500/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-100 transition hover:bg-orange-400/35"
            >
              {dictionary.home.hero.primaryCta}
            </Link>
            <Link
              href={dictionary.home.hero.secondaryHref}
              className="rounded-full border border-zinc-400/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-100 transition hover:border-orange-300 hover:text-orange-200"
            >
              {dictionary.home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="animate-fade-up space-y-5">
        <h2 className="font-display text-2xl text-zinc-100">
          {dictionary.home.sections.statsTitle}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {overviewStats.map((stat) => (
            <article
              key={stat.label}
              className="surface-panel p-5 transition hover:-translate-y-0.5"
            >
              <p className="font-display text-3xl text-orange-300">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-fade-up space-y-5">
        <h2 className="font-display text-2xl text-zinc-100">
          {dictionary.home.sections.timelineTitle}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
          {dictionary.home.sections.timelineDescription}
        </p>
        <ol className="grid gap-4 md:grid-cols-2">
          {timeline.map((event) => (
            <li
              key={`${event.year}-${event.title}`}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5"
            >
              <p className="font-display text-xs uppercase tracking-[0.14em] text-orange-300">
                {event.year}
              </p>
              <h3 className="mt-2 text-lg font-bold text-zinc-100">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {event.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="animate-fade-up space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-zinc-100">
              {dictionary.home.sections.videosTitle}
            </h2>
            <p className="max-w-3xl text-sm text-zinc-300">
              {dictionary.home.sections.videosDescription}
            </p>
          </div>
          <Link
            href="/videos"
            className="text-xs font-bold uppercase tracking-[0.14em] text-orange-200 transition hover:text-orange-100"
          >
            {dictionary.common.openLink}
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {videos.slice(0, 6).map((video) => (
            <article
              key={video.id}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-xl transition hover:-translate-y-0.5 hover:border-orange-400/70"
            >
              <div className="relative aspect-video">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-300">
                  {video.publishedAt}
                </p>
                <h3 className="text-base font-bold text-zinc-100">{video.title}</h3>
                <p className="text-sm text-zinc-300">{video.description}</p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex pt-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-200 transition hover:text-orange-100"
                >
                  {dictionary.common.watchVideo}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-fade-up space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-zinc-100">
            {dictionary.home.sections.membersTitle}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            {dictionary.home.sections.membersDescription}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.tag}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-4"
            >
              <p className="font-display text-xs uppercase tracking-[0.14em] text-orange-300">
                {member.country}
              </p>
              <h3 className="mt-2 text-base font-bold text-zinc-100">{member.name}</h3>
              <p className="mt-1 text-xs text-zinc-300">{member.tag}</p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">{member.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-fade-up space-y-5">
        <div className="space-y-2">
          <h2 className="font-display text-2xl text-zinc-100">
            {dictionary.home.sections.archiveTitle}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            {dictionary.home.sections.archiveDescription}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {archiveLinks.map((item) => (
            <article
              key={item.href}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5"
            >
              <h3 className="text-base font-bold text-zinc-100">{item.label}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-bold uppercase tracking-[0.12em] text-orange-200 transition hover:text-orange-100"
              >
                {dictionary.common.openLink}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="animate-fade-up rounded-3xl border border-orange-500/40 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-zinc-900 p-6 sm:p-8">
        <h2 className="font-display text-2xl text-zinc-100">
          {dictionary.home.sections.finalTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-200">
          {dictionary.home.sections.finalDescription}
        </p>
        <Link
          href={dictionary.home.sections.finalHref}
          className="mt-6 inline-flex rounded-full border border-orange-300/80 bg-orange-500/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-100 transition hover:bg-orange-400/35"
        >
          {dictionary.home.sections.finalCta}
        </Link>
      </section>
    </div>
  );
}
