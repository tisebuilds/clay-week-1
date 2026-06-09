"use client";

import { useState } from "react";
import {
  AtSign,
  Briefcase,
  Building2,
  ChevronDown,
  CircleDollarSign,
  CirclePlus,
  DollarSign,
  Flame,
  Link2,
  ListFilter,
  MoreVertical,
  Newspaper,
  PanelRightClose,
  SatelliteDish,
  Search,
  Share2,
  Sparkles,
  Star,
  Truck,
  Wand2,
  Zap,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Category = "sources" | "enrichments" | "signals" | "exports";

const categories: { id: Category; label: string }[] = [
  { id: "sources", label: "Sources" },
  { id: "enrichments", label: "Enrichments" },
  { id: "signals", label: "Signals" },
  { id: "exports", label: "Exports" },
];

type ProviderToken = {
  icon: React.ReactNode;
  count: number;
};

type EnrichmentItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconClassName?: string;
  iconBg?: string;
  provider?: ProviderToken;
  cost?: string;
  aiBadge?: boolean;
};

type EnrichmentSection = {
  id: string;
  title: string;
  items: EnrichmentItem[];
};

function ProviderIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-[14px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] leading-none",
        className
      )}
    >
      {children}
    </span>
  );
}

const enrichmentSections: EnrichmentSection[] = [
  {
    id: "suggested",
    title: "Suggested for this table",
    items: [
      {
        id: "use-ai",
        title: "Use AI",
        subtitle: "0.1 / row · Artificial Intelligence",
        icon: Wand2,
        iconClassName: "text-[#8b5cf6]",
        iconBg: "bg-[#f3e8ff]",
        cost: "0.1 / row",
      },
      {
        id: "enrich-company",
        title: "Enrich Company",
        subtitle: "Companies, People, Jobs",
        icon: Building2,
        iconClassName: "text-[#2563eb]",
        iconBg: "bg-[#dbeafe]",
      },
    ],
  },
  {
    id: "company-intel",
    title: "Company intelligence",
    items: [
      {
        id: "monthly-traffic",
        title: "Monthly Website Traffic",
        subtitle: "~3 credits · 3 providers",
        icon: Truck,
        iconClassName: "text-[#ea580c]",
        iconBg: "bg-[#ffedd5]",
        provider: {
          icon: (
            <Flame className="size-[13px] fill-[#f97316] text-[#f97316]" strokeWidth={1.5} />
          ),
          count: 3,
        },
        cost: "~3",
      },
      {
        id: "latest-funding",
        title: "Company Latest Funding",
        subtitle: "~4 credits · 3 providers",
        icon: DollarSign,
        iconClassName: "text-[#2563eb]",
        iconBg: "bg-[#dbeafe]",
        provider: {
          icon: (
            <ProviderIcon className="rounded-full bg-[#3b82f6] text-[9px] font-bold text-white">
              i
            </ProviderIcon>
          ),
          count: 3,
        },
        cost: "~4",
      },
      {
        id: "revenue",
        title: "Company Revenue (Exact)",
        subtitle: "~7 credits · 3 providers",
        icon: CircleDollarSign,
        iconClassName: "text-[#2563eb]",
        iconBg: "bg-[#dbeafe]",
        aiBadge: true,
        provider: {
          icon: (
            <ProviderIcon className="rounded-full bg-[#dbeafe] text-[#2563eb]">
              <span className="text-[8px] font-bold">◎</span>
            </ProviderIcon>
          ),
          count: 3,
        },
        cost: "~7",
      },
      {
        id: "techstack",
        title: "Website Techstack",
        subtitle: "~7 credits · 2 providers",
        icon: Newspaper,
        iconClassName: "text-[#16a34a]",
        iconBg: "bg-[#dcfce7]",
        provider: {
          icon: (
            <span className="text-[9px] font-bold leading-none text-[#16a34a]">BW</span>
          ),
          count: 2,
        },
        cost: "~7",
      },
      {
        id: "job-openings",
        title: "Company Job Openings",
        subtitle: "~1 credit · 1 provider",
        icon: Briefcase,
        iconClassName: "text-neutral-700",
        iconBg: "bg-neutral-100",
        provider: {
          icon: (
            <ProviderIcon className="bg-transparent text-neutral-700">
              <Briefcase className="size-3" strokeWidth={1.75} />
            </ProviderIcon>
          ),
          count: 1,
        },
        cost: "~1",
      },
    ],
  },
  {
    id: "custom",
    title: "Custom & workspace",
    items: [
      {
        id: "william-1",
        title: "william-1",
        subtitle: "~3 credits · 1 provider",
        icon: AtSign,
        iconClassName: "text-[#6366f1]",
        iconBg: "bg-[#eef2ff]",
        provider: {
          icon: (
            <ProviderIcon className="bg-[#6366f1] text-white">
              <Sparkles className="size-2.5" strokeWidth={2} />
            </ProviderIcon>
          ),
          count: 1,
        },
        cost: "~3",
      },
      {
        id: "use-ai-fallback",
        title: "Use AI as a fallback to find company name",
        subtitle: "~1 credit · 3 providers",
        icon: Link2,
        iconClassName: "text-[#0284c7]",
        iconBg: "bg-[#e0f2fe]",
        provider: {
          icon: (
            <ProviderIcon className="overflow-hidden p-0">
              <span className="flex size-full">
                <span className="w-1/2 bg-[#38bdf8]" />
                <span className="w-1/2 bg-[#bae6fd]" />
              </span>
            </ProviderIcon>
          ),
          count: 3,
        },
        cost: "~1",
      },
    ],
  },
];

function EnrichmentRow({ item }: { item: EnrichmentItem }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-neutral-50/80"
    >
      <span
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-md",
          item.iconBg ?? "bg-neutral-100"
        )}
      >
        <Icon
          className={cn("size-4 stroke-[1.75]", item.iconClassName ?? "text-neutral-900")}
        />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-neutral-900">{item.title}</p>
          {item.aiBadge && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium bg-[#f3e8ff] text-[#7c3aed]">
              <Sparkles className="size-2.5" strokeWidth={2} />
              AI
            </span>
          )}
        </div>
        <p className="mt-0.5 truncate text-[13px] text-neutral-500">{item.subtitle}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <span
          role="presentation"
          className="inline-flex size-7 items-center justify-center rounded-md text-neutral-400"
          onClick={(e) => e.stopPropagation()}
        >
          <Star className="size-3.5" strokeWidth={1.75} />
        </span>
        <span
          role="presentation"
          className="inline-flex size-7 items-center justify-center rounded-md text-neutral-400"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical className="size-3.5" strokeWidth={1.75} />
        </span>
      </div>
    </button>
  );
}

function CollapsibleSection({
  section,
  defaultOpen = true,
  search,
}: {
  section: EnrichmentSection;
  defaultOpen?: boolean;
  search: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const filteredItems = section.items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <section className="px-4 pb-5">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mb-2.5 flex w-full items-center gap-1.5 text-left"
      >
        <span className="text-sm font-medium text-neutral-900">{section.title}</span>
        <ChevronDown
          className={cn(
            "size-3.5 text-neutral-500 transition-transform",
            !open && "-rotate-90"
          )}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(index > 0 && "border-t border-neutral-200")}
            >
              <EnrichmentRow item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export function ActionsPanelV5() {
  const [activeCategory, setActiveCategory] = useState<Category>("enrichments");
  const [search, setSearch] = useState("");

  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col overflow-hidden border-l border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h2 className="text-lg font-semibold tracking-tight text-neutral-900">Actions</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-md border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            Browse all
          </button>
          <button
            type="button"
            className="inline-flex size-7 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-50"
          >
            <PanelRightClose className="size-3.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Underline tabs */}
      <div className="border-b border-neutral-200 px-4">
        <div className="flex gap-5">
          {categories.map(({ id, label }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={cn(
                  "relative pb-2.5 pt-1 text-sm transition-colors",
                  isActive
                    ? "font-semibold text-neutral-900"
                    : "font-normal text-neutral-500 hover:text-neutral-700"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-neutral-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search + sort */}
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="relative min-w-0 flex-1">
          <Search
            className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400"
            strokeWidth={1.75}
          />
          <Input
            placeholder="Search or add filter..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 rounded-full border-neutral-200 bg-white pl-9 text-sm shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
          />
        </div>
        <button
          type="button"
          className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-neutral-100 px-3 text-sm text-neutral-700 transition-colors hover:bg-neutral-200/70"
        >
          <ListFilter className="size-3.5" strokeWidth={1.75} />
          Most relevant
          <ChevronDown className="size-3 text-neutral-500" strokeWidth={1.75} />
        </button>
      </div>

      {/* Grouped sections */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        {activeCategory === "enrichments" ? (
          enrichmentSections.map((section) => (
            <CollapsibleSection key={section.id} section={section} search={search} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-neutral-100">
              {activeCategory === "sources" && (
                <CirclePlus className="size-5 text-neutral-500" strokeWidth={1.75} />
              )}
              {activeCategory === "signals" && (
                <SatelliteDish className="size-5 text-neutral-500" strokeWidth={1.75} />
              )}
              {activeCategory === "exports" && (
                <Share2 className="size-5 text-neutral-500" strokeWidth={1.75} />
              )}
            </div>
            <p className="text-sm font-medium text-neutral-900">
              {categories.find((c) => c.id === activeCategory)?.label}
            </p>
            <p className="mt-1 text-[13px] text-neutral-500">
              No items in this category yet.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
