"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { iterations } from "@/iterations/registry";

export function IterationNav() {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop();

  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-neutral-200 bg-white px-4 py-2">
      <Link
        href="/"
        className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
      >
        All iterations
      </Link>
      <span className="text-neutral-300">/</span>
      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
        {iterations.map((iteration) => {
          const isActive = iteration.slug === currentSlug;
          return (
            <Link
              key={iteration.slug}
              href={`/i/${iteration.slug}`}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                isActive
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              )}
            >
              {iteration.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
