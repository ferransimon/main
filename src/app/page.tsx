import { Typewriter } from "@/components/Typewriter";
import { hostOf, projects, type Category } from "@/data/projects";

const sections: { category: Category; dir: string }[] = [
  { category: "game", dir: "./juegos" },
  { category: "tool", dir: "./herramientas" },
];

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="break-words">
      <span className="text-accent glow">ferran@vercel</span>
      <span className="text-dim">:</span>
      <span className="text-amber">~</span>
      <span className="text-dim">$ </span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-sm leading-relaxed sm:px-6 sm:py-20 sm:text-base">
      <header className="mb-12">
        <h1 className="mb-2 text-2xl font-bold text-accent glow sm:text-3xl">
          ~/proyectos
        </h1>
        <p className="mb-8 text-dim">
          {"// juegos y herramientas que he ido construyendo"}
        </p>
        <Prompt>
          <Typewriter text="ls -l ./proyectos" />
        </Prompt>
      </header>

      {sections.map(({ category, dir }) => {
        const items = projects.filter((p) => p.category === category);
        return (
          <section key={category} className="mb-10">
            <h2 className="mb-3 text-amber">
              <span className="text-dim"># </span>
              {dir}
              <span className="text-dim"> ({items.length})</span>
            </h2>
            <ul className="space-y-1">
              {items.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 flex flex-col gap-x-4 rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background sm:flex-row sm:items-baseline"
                  >
                    <span className="shrink-0 font-bold sm:w-40">
                      <span className="text-dim group-hover:text-background group-focus-visible:text-background">
                        &gt;{" "}
                      </span>
                      {p.name}
                    </span>
                    <span className="flex-1 pl-4 sm:pl-0">{p.description}</span>
                    <span className="truncate pl-4 text-xs text-dim group-hover:text-background group-focus-visible:text-background sm:pl-0">
                      [{hostOf(p.url)}]
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <footer className="mt-16 space-y-1 text-dim">
        <Prompt>
          <span className="text-foreground">exit</span> 0
        </Prompt>
        <p>
          {`// ${projects.length} proyectos`}
        </p>
      </footer>
    </main>
  );
}
