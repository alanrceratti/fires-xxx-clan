import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { inferredSignals, observedFacts, timeline } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | História",
  description:
    "Linha do tempo do clã FiReS-xXx com fatos observados e inferências sobre a atuação roper no Worms 4 Mayhem.",
  path: "/historia",
});

const dictionary = getDictionary("pt-BR");

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-orange-300">
          Memória competitiva
        </p>
        <h1 className="font-display text-4xl text-zinc-100">
          {dictionary.historyPage.title}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
          {dictionary.historyPage.description}
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-emerald-500/35 bg-emerald-500/10 p-5">
          <h2 className="font-display text-xl text-emerald-100">
            {dictionary.historyPage.observedFactsTitle}
          </h2>
          <ul className="mt-3 space-y-2">
            {observedFacts.map((fact) => (
              <li key={fact} className="text-sm leading-relaxed text-emerald-50/90">
                • {fact}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-orange-500/35 bg-orange-500/10 p-5">
          <h2 className="font-display text-xl text-orange-100">
            {dictionary.historyPage.inferredSignalsTitle}
          </h2>
          <ul className="mt-3 space-y-2">
            {inferredSignals.map((signal) => (
              <li key={signal} className="text-sm leading-relaxed text-orange-50/90">
                • {signal}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl text-zinc-100">Cronologia detalhada</h2>
        <ol className="space-y-4">
          {timeline.map((event) => (
            <li
              key={`${event.year}-${event.title}`}
              className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5"
            >
              <p className="font-display text-xs uppercase tracking-[0.14em] text-orange-300">
                {event.year}
              </p>
              <h3 className="mt-1 text-lg font-bold text-zinc-100">{event.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {event.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
