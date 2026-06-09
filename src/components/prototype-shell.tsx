import type { ReactNode } from "react";

const columns = 5;
const rows = 14;
const barWidths = ["w-24", "w-20", "w-16", "w-14", "w-18"];

export function PrototypeShell({ panel }: { panel: ReactNode }) {
  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-[#f7f7f8]">
      <main className="flex min-w-0 flex-1 flex-col opacity-40 select-none">
        <div className="flex items-center gap-2 border-b border-border bg-background px-6 py-3">
          <div className="h-3.5 w-20 rounded bg-muted-foreground/20" />
          <div className="h-5 w-16 rounded-full bg-muted-foreground/10" />
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-background/80">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/60">
                  {Array.from({ length: columns }).map((_, i) => (
                    <th key={i} className="px-4 py-3">
                      <div className="h-2.5 w-14 rounded bg-muted-foreground/15" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: rows }).map((_, row) => (
                  <tr key={row} className="border-b border-border/40 last:border-0">
                    {Array.from({ length: columns }).map((_, col) => (
                      <td key={col} className="px-4 py-3">
                        <div
                          className={`h-2.5 rounded bg-muted-foreground/10 ${barWidths[(row + col) % barWidths.length]}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {panel}
    </div>
  );
}
