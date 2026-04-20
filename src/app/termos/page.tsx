import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Termos",
  description: "Termos de uso do site de arquivo histórico do clã FiReS-xXx.",
  path: "/termos",
});

const dictionary = getDictionary("pt-BR");

export default function TermsPage() {
  return (
    <article className="max-w-3xl space-y-5 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6">
      <h1 className="font-display text-3xl text-zinc-100">
        {dictionary.legal.terms.title}
      </h1>
      <p className="text-sm leading-relaxed text-zinc-300">
        {dictionary.legal.terms.intro}
      </p>
      <ul className="space-y-2">
        {dictionary.legal.terms.items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-zinc-300">
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
