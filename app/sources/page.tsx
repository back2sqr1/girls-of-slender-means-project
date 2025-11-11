import React from "react";

// app/sources/page.tsx

export const metadata = {
  title: "Sources: WWII influences in The Girls of Slender Means",
};

type Citation = {
  authors: string;
  year?: string;
  title: string;
  publisher?: string;
  location?: string;
  url?: string;
  kind: "Primary" | "Secondary Criticism" | "Historical Context" | "Image Source";
};

const citations: Citation[] = [
  {
    authors: "University of Oxford, Faculty of History",
    year: "2020",
    title: "Rationing in Britain during World War II",
    publisher: "University of Oxford",
    url: "https://www.history.ox.ac.uk/::ognode-637356::/files/download-resource-printable-pdf-11",
    kind: "Historical Context",
  },
  {
    authors: "Museum of English Rural Life (MERL), University of Reading",
    year: "2022",
    title: "Everything You Wanted to Know About Ration Books",
    publisher: "University of Reading",
    url: "https://merl.reading.ac.uk/blog/2022/05/everything-you-wanted-to-know-ration-books/",
    kind: "Historical Context",
  },
  {
    authors: "Imperial War Museums",
    year: "n.d.",
    title: "What You Need to Know About Rationing in the Second World War",
    publisher: "Imperial War Museums",
    location: "London",
    url: "https://www.iwm.org.uk/history/what-you-need-to-know-about-rationing-in-the-second-world-war",
    kind: "Historical Context",
  },
  {
    authors: "Scalia, Christopher J.",
    year: "2025",
    title: "Muriel Spark",
    publisher: "American Enterprise Institute",
    location: "Washington, D.C.",
    url: "https://www.aei.org/articles/muriel-spark/",
    kind: "Secondary Criticism",
  },
  {
    authors: "López López, Beatriz",
    year: "2022",
    title:
      "Muriel Spark and the Political Warfare Executive: The Legacies of Covert Propaganda in Post-War Fiction",
    publisher: "Durham University",
    location: "Durham",
    url: "https://etheses.dur.ac.uk/14920/",
    kind: "Secondary Criticism",
  },
  // add to citations array
    {
    authors: "Baker, Rob",
    year: "2018",
    title: "One Hundred Years of Muriel Spark – The Book Covers",
    publisher: "Flashbak",
    url: "https://flashbak.com/one-hundred-years-muriel-spark-book-covers-394115/",
    kind: "Image Source",
    },

  {
    authors: "Vintag.es",
    year: "2018",
    title: "A Series of Vintage Photos Documented a Day in …",
    publisher: "Vintag.es",
    url: "https://www.vintag.es/2018/08/1940s-housewife.html",
    kind: "Image Source",
  },
  {
    authors: "Inspired Pencil",
    year: "n.d.",
    title: "Rationing WW2 Pictures 2023",
    publisher: "Inspired Pencil",
    url: "https://ar.inspiredpencil.com/pictures-2023/rationing-ww2",
    kind: "Image Source",
  },
];

const kinds: Citation["kind"][] = [
  "Primary",
  "Secondary Criticism",
  "Historical Context",
  "Image Source",
];

export default function SourcesPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
      <header>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          Sources: WWII Influences in <em>The Girls of Slender Means</em>
        </h1>
      </header>

      {kinds.map((kind) => {
        const items = citations.filter((c) => c.kind === kind);
        if (!items.length) return null;
        return (
          <section key={kind} style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", borderBottom: "2px solid #ddd", paddingBottom: "0.3rem" }}>
              {kind}
            </h2>
            <ol style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
              {items.map((c, i) => (
                <li key={i} style={{ marginBottom: "0.9rem" }}>
                  <span>{c.authors}. </span>
                  <cite>
                    <em>{c.title}</em>
                    {c.year ? ` (${c.year})` : ""}
                  </cite>
                  {c.publisher || c.location
                    ? `. ${[c.location, c.publisher].filter(Boolean).join(": ")}.`
                    : "."}
                  {c.url && (
                    <>
                      {" "}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ color: "#1a0dab", textDecoration: "underline" }}
                      >
                        View online
                      </a>
                      .
                    </>
                  )}
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </main>
  );
}
