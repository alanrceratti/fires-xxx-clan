import { ContactForm } from "@/components/contact-form";
import { getDictionary } from "@/i18n/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { archiveLinks } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "FiReS-xXx Clan | Contato",
  description:
    "Página de contato para envio de material histórico e contribuições sobre o clã FiReS-xXx.",
  path: "/contato",
});

const dictionary = getDictionary("pt-BR");

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-orange-300">
          Contribuição comunitária
        </p>
        <h1 className="font-display text-4xl text-zinc-100">
          {dictionary.contactPage.title}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
          {dictionary.contactPage.description}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5">
            <h2 className="font-display text-xl text-zinc-100">
              {dictionary.contactPage.supportTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {dictionary.contactPage.supportDescription}
            </p>
            <a
              href={dictionary.contactPage.supportHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-orange-300/80 bg-orange-500/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-100 transition hover:bg-orange-400/35"
            >
              {dictionary.contactPage.supportCta}
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-5">
            <h3 className="font-display text-lg text-zinc-100">
              Fontes para referência rápida
            </h3>
            <ul className="mt-3 space-y-3">
              {archiveLinks.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-orange-200 transition hover:text-orange-100"
                  >
                    {item.label}
                  </a>
                  <p className="text-sm text-zinc-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-2xl text-zinc-100">
            {dictionary.contactPage.formTitle}
          </h2>
          <p className="text-sm text-zinc-300">{dictionary.contactPage.formDescription}</p>
          <ContactForm dictionary={dictionary.contactPage} />
        </div>
      </section>
    </div>
  );
}
