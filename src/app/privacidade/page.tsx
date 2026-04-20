import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Privacidade",
  description: "Política de privacidade do site de arquivo do clã FiReS-xXx.",
  path: "/privacidade",
});

const dictionary = getDictionary("pt-BR");

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl space-y-5 rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6">
      <h1 className="font-display text-3xl text-zinc-100">
        {dictionary.legal.privacy.title}
      </h1>
      <p className="text-sm leading-relaxed text-zinc-300">
        {dictionary.legal.privacy.intro}
      </p>
      <ul className="space-y-2">
        {dictionary.legal.privacy.items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-zinc-300">
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
