export type Domain = "Mobility" | "Housing" | "Energy" | "Policy & Data";

export type Visualization = "node-network" | "icon-grid" | "house-grid";

export type CaseStudy = {
  id: string;
  domain: Domain;
  city: string;
  title: string;
  description: string;
  tags: string[];
  /** Marker position on the map image, as a percentage of image width/height */
  mapX: number;
  mapY: number;
  /** Optional small visual shown on the card — omit to leave the card text-only for now */
  visualization?: Visualization;
};

export const domains: Domain[] = ["Mobility", "Housing", "Energy", "Policy & Data"];

export const caseStudies: CaseStudy[] = [
  {
    id: "campus-travel-data-collection",
    domain: "Mobility",
    city: "Norfolk, VA",
    title: "Campus Travel Data Collection",
    description:
      "Collected multimodal travel data across campus — mapping routes, distances, and mode share between key nodes to guide future mobility investments.",
    tags: ["Data Collection", "SQL", "GIS"],
    mapX: 84.7,
    mapY: 51.2,
    visualization: "node-network",
  },
  {
    id: "sustainability-resources-map",
    domain: "Energy",
    city: "Detroit, MI",
    title: "Sustainability Resources Map",
    description:
      "Mapped sustainability infrastructure — solar, EV charging, recycling, and green space — across neighborhoods to flag coverage gaps for city planners.",
    tags: ["GIS", "Sustainability", "Data Viz"],
    mapX: 71.64,
    mapY: 32.55,
    visualization: "icon-grid",
  },
  {
    id: "solar-site-selection-gtm",
    domain: "Energy",
    city: "Los Angeles, CA",
    title: "Solar Site Selection & GTM Strategy",
    description:
      "Combined go-to-market and policy research for a residential solar developer to identify where to prioritize expansion across California, weighing permitting timelines, incentive programs, and rooftop viability.",
    tags: ["GTM", "Policy Research", "Site Selection"],
    mapX: 8.135,
    mapY: 57.67,
    visualization: "house-grid",
  },
];
