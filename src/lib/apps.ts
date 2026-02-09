export type AppStatus = "coming-soon" | "available" | "beta";

export interface VyttleApp {
  slug: string;
  name: string;
  nameHtml?: string;
  tagline: string;
  description: string;
  status: AppStatus;
  appStoreUrl?: string;
  accent: string;
  accentLight: string;
  darkBg: string;
  lightBg: string;
  mark: string;
}

export const apps: VyttleApp[] = [
  {
    slug: "sixteen-to-one",
    name: "Sixteen to One",
    nameHtml: 'Sixteen <em>to</em> One',
    tagline: "The ratio, perfected.",
    description:
      "A coffee ratio calculator that does one thing and does it well. Dial in your brew with precision — water, coffee, ratio, done.",
    status: "coming-soon",
    accent: "#C4956A",
    accentLight: "#DFC5A8",
    darkBg: "#1C1008",
    lightBg: "#F8F4EE",
    mark: "SixteenToOneMark",
  },
  {
    slug: "stockpot",
    name: "Stockpot",
    tagline: "Your recipes. Your kitchen.",
    description:
      "A recipe app that keeps your collection local and private. Organize, cook, and share — all synced through iCloud, nothing in the cloud you don't control.",
    status: "coming-soon",
    accent: "#A63D2F",
    accentLight: "#E8A99E",
    darkBg: "#0F1A14",
    lightBg: "#F4F7F4",
    mark: "StockpotMark",
  },
  {
    slug: "bramble",
    name: "Bramble",
    tagline: "Contacts, untangled.",
    description:
      "A lightweight contact manager that helps you clean up, organize, and actually maintain your address book. Local-first with iCloud sync.",
    status: "coming-soon",
    accent: "#7B5EA7",
    accentLight: "#B89DD4",
    darkBg: "#0A1019",
    lightBg: "#E8F0F7",
    mark: "BrambleMark",
  },
];

export function getAppBySlug(slug: string): VyttleApp | undefined {
  return apps.find((app) => app.slug === slug);
}
