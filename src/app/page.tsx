import Link from "next/link";
import { iterations } from "@/iterations/registry";
import { cn } from "@/lib/utils";

const statusLabel = {
  base: "Base",
  explore: "Explore",
  archived: "Archived",
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
          Clay prototype
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-neutral-900">
          Actions panel iterations
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Compare visual directions from one site. Each iteration lives at its own
          route — no branch juggling required.
        </p>

        <ul className="mt-10 space-y-3">
          {iterations.map((iteration) => (
            <li key={iteration.slug}>
              <Link
                href={`/i/${iteration.slug}`}
                className="group block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-medium text-neutral-900 group-hover:underline">
                      {iteration.name}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {iteration.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium",
                      iteration.status === "base" && "bg-blue-50 text-blue-700",
                      iteration.status === "explore" && "bg-amber-50 text-amber-700",
                      iteration.status === "archived" && "bg-neutral-100 text-neutral-600"
                    )}
                  >
                    {statusLabel[iteration.status]}
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs text-neutral-400">
                  /i/{iteration.slug}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-neutral-400">
          Add a new riff: create a panel component and register it in{" "}
          <code className="rounded bg-neutral-200/60 px-1 py-0.5">
            src/iterations/registry.ts
          </code>
          .
        </p>
      </div>
    </div>
  );
}
