"use client";

import { useState } from "react";
import {
  AtSign,
  Briefcase,
  Building2,
  ChevronDown,
  CircleDollarSign,
  CirclePlus,
  Coins,
  DollarSign,
  Flame,
  Link2,
  Newspaper,
  PanelRightClose,
  SatelliteDish,
  Search,
  Share2,
  Sparkles,
  Truck,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Category = "sources" | "enrichments" | "signals" | "exports";

const categories: {
  id: Category;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "sources", label: "Sources", icon: CirclePlus },
  { id: "enrichments", label: "Enrichments", icon: Zap },
  { id: "signals", label: "Signals", icon: SatelliteDish },
  { id: "exports", label: "Exports", icon: Share2 },
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
  provider?: ProviderToken;
  cost?: string;
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

const enrichments: EnrichmentItem[] = [
  {
    id: "use-ai",
    title: "Use AI",
    subtitle: "Artificial Intelligence",
    icon: Wand2,
    iconClassName: "text-[#8b5cf6]",
    cost: "0.1 / row",
  },
  {
    id: "enrich-company",
    title: "Enrich Company",
    subtitle: "Companies, People, Jobs",
    icon: Building2,
    iconClassName: "text-neutral-900",
  },
  {
    id: "william-1",
    title: "william-1",
    subtitle: "asd",
    icon: AtSign,
    iconClassName: "text-neutral-900",
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
    subtitle: "AI!",
    icon: Link2,
    iconClassName: "text-neutral-900",
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
  {
    id: "monthly-traffic",
    title: "Monthly Website Traffic",
    subtitle: "Need to know a company's website traffic? This sy...",
    icon: Truck,
    iconClassName: "text-neutral-900",
    provider: {
      icon: (
        <ProviderIcon className="bg-transparent text-orange-500">
          <Flame className="size-3.5 fill-orange-500 text-orange-500" strokeWidth={1.5} />
        </ProviderIcon>
      ),
      count: 3,
    },
    cost: "~3",
  },
  {
    id: "latest-funding",
    title: "Company Latest Funding",
    subtitle: "Need to know a company's latest funding details? T...",
    icon: DollarSign,
    iconClassName: "text-neutral-900",
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
    id: "techstack",
    title: "Website Techstack",
    subtitle: "Need to know what technologies a website uses? Thi...",
    icon: Newspaper,
    iconClassName: "text-neutral-900",
    provider: {
      icon: (
        <span className="text-[9px] font-bold leading-none text-[#16a34a]">BW</span>
      ),
      count: 2,
    },
    cost: "~7",
  },
  {
    id: "revenue",
    title: "Company Revenue (Exact)",
    subtitle: "Need to know a company's revenue? This enrichmen...",
    icon: CircleDollarSign,
    iconClassName: "text-neutral-900",
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
    id: "job-openings",
    title: "Company Job Openings",
    subtitle: "Looking for a company's job openings? This enrich...",
    icon: Briefcase,
    iconClassName: "text-neutral-900",
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
];

function CoinIcon() {
  return (
    <Coins
      className="size-3.5 text-[#16a34a]"
      strokeWidth={1.75}
    />
  );
}

function TokenGroup({
  provider,
  cost,
}: {
  provider?: ProviderToken;
  cost?: string;
}) {
  if (!provider && !cost) return null;

  return (
    <div className="inline-flex h-6 shrink-0 items-stretch overflow-hidden rounded-full border border-neutral-300 bg-white text-[11px] font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {provider && (
        <div className="inline-flex items-center gap-1 px-2">
          {provider.icon}
          <span>+{provider.count}</span>
        </div>
      )}
      {provider && cost && <div className="w-px bg-neutral-300" />}
      {cost && (
        <div className="inline-flex items-center gap-1 px-2">
          <CoinIcon />
          <span>{cost}</span>
        </div>
      )}
    </div>
  );
}

function EnrichmentRow({ item }: { item: EnrichmentItem }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      className="grid w-full grid-cols-[16px_minmax(0,1fr)] grid-rows-[auto_auto] gap-x-3 gap-y-0.5 rounded-md px-1 py-2.5 text-left transition-colors hover:bg-neutral-50"
    >
      <Icon
        className={cn(
          "col-start-1 row-span-2 size-4 shrink-0 self-center stroke-[1.75]",
          item.iconClassName ?? "text-neutral-900"
        )}
      />
      <div className="col-start-2 row-start-1 flex min-w-0 items-center justify-between gap-2">
        <p className="min-w-0 truncate text-sm font-medium leading-5 text-neutral-900">
          {item.title}
        </p>
        {(item.provider || item.cost) && (
          <TokenGroup provider={item.provider} cost={item.cost} />
        )}
      </div>
      <p className="col-start-2 row-start-2 truncate text-[13px] leading-4 text-neutral-500">
        {item.subtitle}
      </p>
    </button>
  );
}

export function ActionsPanel() {
  const [activeCategory, setActiveCategory] = useState<Category>("enrichments");
  const [search, setSearch] = useState("");

  const filtered = enrichments.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col overflow-hidden border-l border-neutral-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-3 pt-4">
        <h2 className="text-[15px] font-semibold text-neutral-900">Actions</h2>
        <button
          type="button"
          className="inline-flex size-7 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 transition-colors hover:bg-neutral-50"
        >
          <PanelRightClose className="size-3.5" strokeWidth={1.75} />
        </button>
      </div>

      <div className="border-b border-neutral-200" />

      {/* Search */}
      <div className="px-4 pb-3 pt-3">
        <div className="relative">
          <Search
            className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400"
            strokeWidth={1.75}
          />
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 rounded-md border-neutral-200 bg-white pl-8 text-sm shadow-none placeholder:text-neutral-400 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-4 pb-3">
        <div className="grid grid-cols-4 gap-0.5 rounded-lg border border-neutral-200 p-1">
          {categories.map(({ id, label, icon: Icon }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-md px-1 py-2.5 transition-colors",
                  isActive
                    ? "bg-[#EBF5FF] text-[#2563EB]"
                    : "text-neutral-500 hover:bg-neutral-50"
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                <span className="text-[11px] font-medium leading-none">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter */}
      <div className="px-4 pb-2">
        <button
          type="button"
          className="inline-flex h-7 items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 text-xs font-normal text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Suggested
          <ChevronDown className="size-3 text-neutral-500" strokeWidth={1.75} />
        </button>
      </div>

      {/* List */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3">
        <div className="pb-3">
          {filtered.map((item) => (
            <EnrichmentRow key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 p-4">
        <Button
          variant="outline"
          className="h-9 w-full rounded-md border-neutral-200 text-sm font-medium text-neutral-900 shadow-none hover:bg-neutral-50"
        >
          View all enrichments
        </Button>
      </div>
    </aside>
  );
}
