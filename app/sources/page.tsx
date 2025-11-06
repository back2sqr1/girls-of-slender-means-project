import React from "react";

// app/sources/page.tsx

export const metadata = {
    title: "Sources: WWII influences in The Girls of Slender Means",
    description:
        "Dummy bibliography page with citations for researching World War II influences in Muriel Spark’s The Girls of Slender Means.",
};

type Citation = {
    authors: string;
    year?: string;
    title: string;
    publisher?: string;
    location?: string;
    url?: string;
    kind: "Primary" | "Secondary Criticism" | "Historical Context";
};

const citations: Citation[] = [
    {
        authors: "Muriel Spark",
        year: "1963",
        title: "The Girls of Slender Means",
        publisher: "Macmillan",
        location: "London",
        kind: "Primary",
    },
    {
        authors: "Muriel Spark",
        year: "1992",
        title: "Curriculum Vitae: A Volume of Autobiography",
        publisher: "Houghton Mifflin",
        location: "Boston",
        kind: "Primary",
    },
    {
        authors: "Martin Stannard",
        year: "2009",
        title: "Muriel Spark: The Biography",
        publisher: "W. W. Norton",
        location: "New York",
        kind: "Secondary Criticism",
    },
    {
        authors: "Ruth Whittaker",
        year: "1982",
        title: "Muriel Spark",
        publisher: "Macmillan",
        location: "London",
        kind: "Secondary Criticism",
    },
    {
        authors: "Gillian Gill",
        year: "1983",
        title: "Muriel Spark",
        publisher: "Columbia University Press",
        location: "New York",
        kind: "Secondary Criticism",
    },
    {
        authors: "Gillian Plain",
        year: "2013",
        title: "Literature of the 1940s: War, Postwar and ‘Peace’",
        publisher: "Edinburgh University Press",
        location: "Edinburgh",
        kind: "Historical Context",
    },
    {
        authors: "Angus Calder",
        year: "1969",
        title: "The People’s War: Britain 1939–1945",
        publisher: "Jonathan Cape",
        location: "London",
        kind: "Historical Context",
    },
    {
        authors: "Juliet Gardiner",
        year: "2004",
        title: "Wartime: Britain 1939–1945",
        publisher: "Headline",
        location: "London",
        kind: "Historical Context",
    },
    {
        authors: "David Kynaston",
        year: "2007",
        title: "Austerity Britain, 1945–1951",
        publisher: "Bloomsbury",
        location: "London",
        kind: "Historical Context",
    },
    {
        authors: "Paul Fussell",
        year: "1989",
        title: "Wartime: Understanding and Behavior in the Second World War",
        publisher: "Oxford University Press",
        location: "New York",
        kind: "Historical Context",
    },
    {
        authors: "JSTOR/Project MUSE",
        title: "Search: “Muriel Spark” AND “World War II”",
        url: "https://www.jstor.org/",
        kind: "Secondary Criticism",
    },
    {
        authors: "British Library",
        title: "Postwar Britain: 1945–1951 (Overview)",
        url: "https://www.bl.uk/",
        kind: "Historical Context",
    },
];

const kinds: Citation["kind"][] = [
    "Primary",
    "Secondary Criticism",
    "Historical Context",
];

export default function SourcesPage() {
    return (
        <main>
            <header>
                <h1>Sources: WWII influences in The Girls of Slender Means</h1>
                <p style={{ color: "#555" }}>
                    This is a dummy bibliography to help research World War II and early
                    postwar influences in Muriel Spark’s The Girls of Slender Means.
                </p>
            </header>

            {kinds.map((k) => {
                const items = citations.filter((c) => c.kind === k);
                if (!items.length) return null;
                return (
                    <section key={k} style={{ marginTop: "2rem" }}>
                        <h2>{k}</h2>
                        <ol>
                            {items.map((c, i) => (
                                <li key={i} style={{ marginBottom: "0.75rem" }}>
                                    <span>{c.authors}. </span>
                                    <cite>
                                        {c.title}
                                        {c.year ? ` (${c.year})` : ""}
                                    </cite>
                                    {c.publisher || c.location
                                        ? `. ${[c.location, c.publisher].filter(Boolean).join(": ")}.`
                                        : "."}
                                    {c.url ? (
                                        <>
                                            {" "}
                                            <a
                                                href={c.url}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                Link
                                            </a>
                                            .
                                        </>
                                    ) : null}
                                </li>
                            ))}
                        </ol>
                    </section>
                );
            })}

            <footer style={{ marginTop: "2rem", color: "#666" }}>
                <p>
                    Tip: Use library databases (JSTOR, Project MUSE) to find peer‑reviewed
                    articles focused on Spark and wartime/postwar Britain.
                </p>
            </footer>
        </main>
    );
}