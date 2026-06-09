import type { ComponentType } from "react";
import { ActionsPanel } from "@/components/actions-panel";
import { ActionsPanelV1 } from "@/components/actions-panel-v1";
import { ActionsPanelV2 } from "@/components/actions-panel-v2";
import { ActionsPanelV3 } from "@/components/actions-panel-v3";
import { ActionsPanelV5 } from "@/components/actions-panel-v5";

export type IterationStatus = "base" | "explore" | "archived";

export type Iteration = {
  slug: string;
  name: string;
  description: string;
  status: IterationStatus;
  Panel: ComponentType;
};

export const iterations: Iteration[] = [
  {
    slug: "v0-base",
    name: "v0 — Base",
    description:
      "Concept-fidelity Actions side panel: segmented control, token pills, low-fi table context.",
    status: "base",
    Panel: ActionsPanel,
  },
  {
    slug: "v1-sliding-tabs",
    name: "v1 — Sliding tabs",
    description:
      "Sliding pill indicator on segmented control, elevated panel shadow, blue-tinted row hover.",
    status: "explore",
    Panel: ActionsPanelV1,
  },
  {
    slug: "v2-inline-toolbar",
    name: "v2 — Inline toolbar",
    description:
      "Category tabs first, then search, suggested filter, and view-all on a single row.",
    status: "explore",
    Panel: ActionsPanelV2,
  },
  {
    slug: "v3-suggested-row",
    name: "v3 — Suggested row",
    description:
      "v0 layout with Suggested filter and View all enrichments link on one row below tabs.",
    status: "explore",
    Panel: ActionsPanelV3,
  },
  {
    slug: "v5-wallet-sections",
    name: "v5 — Wallet sections",
    description:
      "Ramp wallet-inspired layout: underline tabs, pill search, collapsible grouped lists with bordered rows.",
    status: "explore",
    Panel: ActionsPanelV5,
  },
];

export function getIteration(slug: string) {
  return iterations.find((iteration) => iteration.slug === slug);
}

export function getIterationSlugs() {
  return iterations.map((iteration) => iteration.slug);
}
