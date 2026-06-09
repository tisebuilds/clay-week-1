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
        <Flame className="size-[13px] fill-[#f97316] text-[#f97316]" strokeWidth={1.5} />
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
      className="size-[13px] text-[#15803d]"
      strokeWidth={2}
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
    <div className="inline-flex h-[22px] shrink-0 items-stretch overflow-hidden rounded-full border border-neutral-200 bg-white text-[11px] font-normal text-neutral-600">
      {provider && (
        <div className="inline-flex items-center gap-1 px-1.5">
          {provider.icon}
          <span className="text-neutral-700">+{provider.count}</span>
        </div>
      )}
      {provider && cost && <div className="w-px self-stretch bg-neutral-200" />}
      {cost && (
        <div className="inline-flex items-center gap-1 px-1.5">
          <CoinIcon />
          <span className="text-neutral-700">{cost}</span>
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
      className="flex w-full items-center gap-3 rounded-md px-4 py-2.5 text-left transition-colors hover:bg-neutral-50/80"
    >
      <Icon
        className={cn(
          "size-4 shrink-0 stroke-[1.75]",
          item.iconClassName ?? "text-neutral-900"
        )}
      />
      <div className="min-w-0 flex-1 space-y-0.5">
        <p className="truncate text-sm font-medium leading-tight text-neutral-900">
          {item.title}
        </p>
        <p className="truncate text-[13px] leading-tight text-neutral-500">
          {item.subtitle}
        </p>
      </div>
      {(item.provider || item.cost) && (
        <TokenGroup provider={item.provider} cost={item.cost} />
      )}
    </button>
  );
}

export function ActionsPanelV2() {
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

      {/* Category tabs */}
      <div className="px-4 pb-3 pt-3">
        <div className="grid grid-cols-4 gap-[4.5px] py-1">
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
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200/80"
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                <span className="text-[11px] font-medium leading-none">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-b border-neutral-200" />

      {/* Search, filter, and view-all toolbar */}
      <div className="flex items-center gap-2 px-4 pb-3 pt-3">
        <div className="relative min-w-0 flex-1">
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
        <button
          type="button"
          className="inline-flex h-8 shrink-0 items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 text-xs font-normal text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          Suggested
          <ChevronDown className="size-3 text-neutral-500" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 items-center rounded-md border border-neutral-200 bg-white px-2.5 text-xs font-normal text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          View all
        </button>
      </div>

      {/* List */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="pb-3">
          {filtered.map((item) => (
            <EnrichmentRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
