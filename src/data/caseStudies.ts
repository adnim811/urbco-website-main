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
  {
    id: "adu-market-entry-gtm",
    domain: "Housing",
    city: "San Francisco, CA",
    title: "ADU Market-Entry GTM Strategy",
    description:
      "Developed a go-to-market strategy for a drone-based 3D modeling company entering the accessory dwelling unit (ADU) market in California.",
    tags: ["GTM", "Market Research", "Housing Policy"],
    mapX: 3.03,
    mapY: 41.15,
  },
  {
    id: "ann-arbor-sustainability-map",
    domain: "Energy",
    city: "Ann Arbor, MI",
    title: "Municipal Sustainability Resource Map",
    description:
      "Designed and built a web-based map helping residents discover local sustainability resources for a city office of sustainability.",
    tags: ["Web Development", "GIS", "Public Sector"],
    mapX: 70.51,
    mapY: 33.05,
  },
  {
    id: "air-quality-market-entry",
    domain: "Policy & Data",
    city: "Detroit, MI",
    title: "Air Quality Awareness & Market Entry",
    description:
      "Led user segmentation, product design, and a market entry strategy for a hyperlocal air quality data platform expanding into a new county.",
    tags: ["User Research", "Product Strategy", "Market Entry"],
    mapX: 70.9,
    mapY: 31.8,
  },
  {
    id: "ebike-app-ux-research",
    domain: "Mobility",
    city: "Brooklyn, NY",
    title: "E-Bike Attachment App UX Research",
    description:
      "Conducted UX research and design for a mobile app pairing hardware and software for an e-bike conversion attachment.",
    tags: ["UX Research", "Product Design"],
    mapX: 86.9,
    mapY: 33.4,
  },
  {
    id: "ebike-campus-gtm",
    domain: "Mobility",
    city: "Brooklyn, NY",
    title: "Campus Market GTM Strategy",
    description:
      "Ran user research and a go-to-market strategy to bring an e-bike conversion attachment to the college student market.",
    tags: ["User Research", "GTM"],
    mapX: 86.9,
    mapY: 34.7,
  },
  {
    id: "battery-safety-stakeholder-strategy",
    domain: "Energy",
    city: "Detroit, MI",
    title: "Battery Safety Stakeholder Strategy",
    description:
      "Conducted stakeholder research and a marketing strategy for a fire-prone lithium-ion battery transport and storage company partnering with university stakeholders.",
    tags: ["Stakeholder Research", "Marketing Strategy"],
    mapX: 72.4,
    mapY: 31.9,
  },
  {
    id: "infrastructure-resilience-pricing",
    domain: "Policy & Data",
    city: "Brooklyn, NY",
    title: "Infrastructure Resilience Pricing Strategy",
    description:
      "Built a tiered pricing strategy and financial model for a drone-based infrastructure resilience assessment platform targeting distinct customer segments.",
    tags: ["Financial Modeling", "Pricing Strategy"],
    mapX: 88.3,
    mapY: 34.0,
  },
  {
    id: "onchain-real-estate-gtm",
    domain: "Housing",
    city: "Detroit, MI",
    title: "On-Chain Real Estate GTM Strategy",
    description:
      "Built a ground-up go-to-market strategy, policy research, and market positioning for a blockchain platform pioneering shared real estate ownership.",
    tags: ["GTM", "Policy Research", "Market Positioning"],
    mapX: 70.9,
    mapY: 33.3,
  },
  {
    id: "civic-engagement-app-ux",
    domain: "Policy & Data",
    city: "Detroit, MI",
    title: "Civic Engagement App UX Research",
    description:
      "Led UX research and design for an app making political data more accessible and empowering students to stay politically informed.",
    tags: ["UX Research", "Civic Tech"],
    mapX: 72.4,
    mapY: 33.3,
  },
];
