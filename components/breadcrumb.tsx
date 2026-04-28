import Link from "next/link";
import { JsonLd } from "./json-ld";

export type Crumb = { label: string; href: string };

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  const items = [{ label: "Home", href: "/" }, ...trail];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://altcrew.in${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav
        aria-label="Breadcrumb"
        className="font-mono text-[11px] uppercase tracking-widest text-muted"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-fg/80">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-[var(--accent)]">
                    {c.label}
                  </Link>
                )}
                {!last && <span aria-hidden>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
