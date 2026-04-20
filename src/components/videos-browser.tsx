"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { ClanVideo } from "@/lib/site-data";

type VideosPageDictionary = {
  searchLabel: string;
  searchPlaceholder: string;
  loading: string;
  error: string;
  empty: string;
  filterAll: string;
  channelLabel: string;
};

type VideosBrowserProps = {
  videos: ClanVideo[];
  dictionary: VideosPageDictionary;
  watchVideoLabel: string;
};

export function VideosBrowser({
  videos,
  dictionary,
  watchVideoLabel,
}: VideosBrowserProps) {
  const [query, setQuery] = useState("");
  const [channelFilter, setChannelFilter] = useState("all");
  const [settledQuery, setSettledQuery] = useState("");
  const [settledChannelFilter, setSettledChannelFilter] = useState("all");

  const channels = useMemo(() => {
    const unique = Array.from(new Set(videos.map((video) => video.channel))).sort();
    return unique;
  }, [videos]);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setSettledQuery(query);
      setSettledChannelFilter(channelFilter);
    }, 260);

    return () => window.clearTimeout(handler);
  }, [query, channelFilter]);

  const loading = query !== settledQuery || channelFilter !== settledChannelFilter;
  const error = settledQuery.trim().toLowerCase() === "erro";

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const term = settledQuery.trim().toLowerCase();
      const matchesQuery =
        term.length === 0 ||
        video.title.toLowerCase().includes(term) ||
        video.channel.toLowerCase().includes(term) ||
        video.publishedAt.toLowerCase().includes(term);
      const matchesChannel =
        settledChannelFilter === "all" || video.channel === settledChannelFilter;
      return matchesQuery && matchesChannel;
    });
  }, [settledChannelFilter, settledQuery, videos]);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-[1fr_240px]">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
            {dictionary.searchLabel}
          </label>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={dictionary.searchPlaceholder}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
            {dictionary.channelLabel}
          </label>
          <select
            value={channelFilter}
            onChange={(event) => setChannelFilter(event.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-orange-400"
          >
            <option value="all">{dictionary.filterAll}</option>
            {channels.map((channel) => (
              <option key={channel} value={channel}>
                {channel}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-sm text-zinc-300">
          {dictionary.loading}
        </div>
      ) : null}

      {error ? (
        <div className="rounded-xl border border-red-500/50 bg-red-500/15 px-4 py-4 text-sm text-red-100">
          {dictionary.error}
        </div>
      ) : null}

      {!loading && !error && filteredVideos.length === 0 ? (
        <div className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-4 text-sm text-zinc-300">
          {dictionary.empty}
        </div>
      ) : null}

      {!loading && !error && filteredVideos.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredVideos.map((video) => (
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
                <h3 className="text-base font-bold leading-tight text-zinc-100">
                  {video.title}
                </h3>
                <p className="text-sm text-zinc-300">{video.description}</p>
                <p className="text-xs text-zinc-400">{video.channel}</p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex pt-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-200 transition hover:text-orange-100"
                >
                  {watchVideoLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
