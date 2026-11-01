import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/data/portfolio";

export function WorkGrid() {
  const [category, setCategory] = useState<Category>("All");

  const visible = useMemo(
    () => (category === "All" ? projects : projects.filter((project) => project.category === category)),
    [category],
  );

  const label =
    visible.length === 1 ? "1 study" : `${visible.length} studies`;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted uppercase">Index</p>
            <h2 className="mt-2 font-display text-section text-fg">Selected studies</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((item) => {
              const selected = item === category;
              const count =
                item === "All" ? projects.length : projects.filter((project) => project.category === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  className={
                    "min-h-11 rounded-full border px-4 text-sm transition-colors duration-200 active:scale-[0.96] " +
                    (selected
                      ? "border-ink bg-ink text-bg"
                      : "border-line bg-transparent text-fg hover:border-fg")
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                  <span className={"ml-2 tabular-nums " + (selected ? "text-bg/70" : "text-muted")}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          Showing {label}
          {category === "All" ? "." : ` in ${category.toLowerCase()}.`}
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id} className={project.wide ? "md:col-span-2" : undefined}>
              <article className="project-card" tabIndex={0} aria-labelledby={`${project.id}-title`}>
                  <div className="relative overflow-hidden bg-ink">
                    <img
                      src={project.image}
                      alt=""
                      width={1728}
                      height={1152}
                      className={
                        "project-photo aspect-plate w-full object-cover " + (project.wide ? "md:aspect-banner" : "")
                      }
                      loading={project.index === "01" ? "eager" : "lazy"}
                    />
                    <div className="project-veil absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <p id={`${project.id}-note`} className="max-w-lg bg-ink px-4 py-3 text-base text-bg">
                        {project.blurb}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-widest text-muted uppercase">{project.category}</p>
                      <h3 id={`${project.id}-title`} className="mt-1 font-display text-3xl text-fg">
                        {project.title}
                      </h3>
                    </div>
                    <p className="pt-1 text-sm text-muted tabular-nums">
                      {project.index}
                      <span className="mx-1.5 text-line">/</span>
                      {project.year}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{project.place}</p>
                </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
