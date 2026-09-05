import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function resolveHref(href: string): string {
  if (href.startsWith("internal:")) return `/legal/${href.slice("internal:".length)}`;
  return href;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const resolved = resolveHref(href);
    nodes.push(
      resolved.startsWith("/") ? (
        <Link key={`${keyPrefix}-${index}`} href={resolved} className="underline">
          {label}
        </Link>
      ) : (
        <a key={`${keyPrefix}-${index}`} href={resolved} className="underline">
          {label}
        </a>
      )
    );
    lastIndex = LINK_PATTERN.lastIndex;
    index += 1;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

/** Renders the API's plain-text legal copy: blank-line-separated paragraphs, "• " bullet
 * lines, and `[label](url)` links (including `internal:kind` cross-links between documents). */
export function LegalBodyText({ text }: { text: string }): ReactNode {
  const paragraphs = text.split("\n\n");
  return (
    <>
      {paragraphs.map((paragraph, paragraphIndex) => {
        const key = `p-${paragraphIndex}`;
        if (paragraph.startsWith("• ")) {
          return (
            <p key={key} className="pl-4">
              {renderInline(paragraph.slice(2), key)}
            </p>
          );
        }
        return <p key={key}>{renderInline(paragraph, key)}</p>;
      })}
    </>
  );
}
