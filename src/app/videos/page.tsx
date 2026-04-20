import { VideosBrowser } from "@/components/videos-browser";
import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { videos } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Vídeos",
  description:
    "Catálogo de vídeos ligados ao clã FiReS-xXx em Worms 4 Mayhem, com filtros por canal e ano.",
  path: "/videos",
});

const dictionary = getDictionary("pt-BR");

export default function VideosPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-orange-300">
          Arquivo de mídia
        </p>
        <h1 className="font-display text-4xl text-zinc-100">
          {dictionary.videosPage.title}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
          {dictionary.videosPage.description}
        </p>
      </section>

      <VideosBrowser
        videos={videos}
        dictionary={dictionary.videosPage}
        watchVideoLabel={dictionary.common.watchVideo}
      />
    </div>
  );
}
