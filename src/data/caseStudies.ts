export type Domain = "Mobility" | "Real Estate" | "Energy" | "Government" | "Public Tech" | "AEC";

export type Visualization = "node-network" | "icon-grid" | "house-grid";

export type CaseStudy = {
  id: string;
  domain: Domain;
  city: string;
  partner: string;
  partnerUrl: string;
  title: string;
  description: string;
  tags: string[];
  /** Marker position on the map image, as a percentage of image width/height */
  mapX: number;
  mapY: number;
  /** Optional small visual shown on the card — omit to leave the card text-only for now */
  visualization?: Visualization;
};

export const domains: Domain[] = ["Mobility", "Real Estate", "Energy", "Government", "Public Tech", "AEC"];

export const caseStudies: CaseStudy[] = [
  {
    id: "campus-travel-data-collection",
    domain: "AEC",
    city: "Norfolk, VA",
    partner: "Hanbury",
    partnerUrl: "https://hanbury.design",
    title: "Digital Campus Planning Platform",
    description:
      "Conducted UX research and built a web platform that digitized part of Hanbury's campus planning process.",
    tags: ["UX Research", "Web Development", "Campus Planning"],
    mapX: 84.7,
    mapY: 51.2,
    visualization: "node-network",
  },
  {
    id: "sustainability-resources-map",
    domain: "Government",
    city: "Detroit, MI",
    partner: "City of Detroit",
    partnerUrl: "https://detroitmi.gov/government/mayors-office/office-sustainability",
    title: "Sustainability Resources Map",
    description:
      "Built a web-based sustainability resource map and developed community outreach recommendations to help Detroit residents live more sustainably.",
    tags: ["Web Development", "Community Outreach", "Sustainability"],
    mapX: 71.64,
    mapY: 32.55,
    visualization: "icon-grid",
  },
  {
    id: "solar-site-selection-gtm",
    domain: "Energy",
    city: "Los Angeles, CA",
    partner: "Fram Energy",
    partnerUrl: "https://www.framenergy.com",
    title: "Multifamily Solar Market Entry",
    description:
      "Developed a go-to-market strategy for Fram Energy's solar billing software to enter California's multifamily real estate market.",
    tags: ["GTM", "Market Entry", "Multifamily Solar"],
    mapX: 8.135,
    mapY: 57.67,
    visualization: "house-grid",
  },
  {
    id: "adu-market-entry-gtm",
    domain: "AEC",
    city: "San Francisco, CA",
    partner: "DroneDeploy",
    partnerUrl: "https://www.dronedeploy.com",
    title: "ADU Market-Entry GTM Strategy",
    description:
      "Conducted policy research and developed a go-to-market strategy for DroneDeploy's entry into California's accessory dwelling unit market.",
    tags: ["GTM", "Market Research", "Housing Policy"],
    mapX: 3.03,
    mapY: 41.15,
  },
  {
    id: "ann-arbor-sustainability-map",
    domain: "Government",
    city: "Ann Arbor, MI",
    partner: "City of Ann Arbor",
    partnerUrl: "https://www.a2gov.org/sustainability-innovations-home/",
    title: "Municipal Sustainability Resource Map",
    description:
      "Designed and built a web-based map that helps Ann Arbor residents discover local sustainability resources.",
    tags: ["Web Development", "GIS", "Government"],
    mapX: 70.51,
    mapY: 33.05,
  },
  {
    id: "air-quality-market-entry",
    domain: "Public Tech",
    city: "Detroit, MI",
    partner: "JustAir",
    partnerUrl: "https://www.justair.co",
    title: "Air Quality Awareness & Market Entry",
    description:
      "Led user segmentation, product strategy, and market-entry planning for JustAir's expansion across Wayne County.",
    tags: ["User Research", "Product Strategy", "Market Entry"],
    mapX: 70.9,
    mapY: 31.8,
  },
  {
    id: "ebike-app-ux-research",
    domain: "Mobility",
    city: "Brooklyn, NY",
    partner: "CLIP",
    partnerUrl: "https://clip.bike",
    title: "E-Bike Attachment App UX Research",
    description:
      "Conducted UX research and designed a mobile app integrating the hardware and software experience for CLIP's portable e-bike upgrade.",
    tags: ["UX Research", "Product Design"],
    mapX: 86.9,
    mapY: 33.4,
  },
  {
    id: "ebike-campus-gtm",
    domain: "Mobility",
    city: "Brooklyn, NY",
    partner: "CLIP",
    partnerUrl: "https://clip.bike",
    title: "Campus Market GTM Strategy",
    description:
      "Conducted user research and developed a go-to-market strategy for bringing CLIP's e-bike upgrade to college students.",
    tags: ["User Research", "GTM"],
    mapX: 86.9,
    mapY: 34.7,
  },
  {
    id: "battery-safety-stakeholder-strategy",
    domain: "Energy",
    city: "Detroit, MI",
    partner: "ESSPI",
    partnerUrl: "https://esspi.com",
    title: "Battery Safety Stakeholder Strategy",
    description:
      "Conducted stakeholder research and developed a marketing strategy to support ESSPI's collaboration with university partners.",
    tags: ["Stakeholder Research", "Marketing Strategy"],
    mapX: 72.4,
    mapY: 31.9,
  },
  {
    id: "infrastructure-resilience-pricing",
    domain: "Real Estate",
    city: "Brooklyn, NY",
    partner: "Mira Intel",
    partnerUrl: "https://miraintel.com",
    title: "Infrastructure Resilience Pricing Strategy",
    description:
      "Built a tiered pricing strategy and financial model for Mira Intel's drone-based infrastructure resilience platform.",
    tags: ["Financial Modeling", "Pricing Strategy"],
    mapX: 88.3,
    mapY: 34.0,
  },
  {
    id: "onchain-real-estate-gtm",
    domain: "Real Estate",
    city: "Detroit, MI",
    partner: "40 Acres",
    partnerUrl: "https://www.40acresapp.com",
    title: "On-Chain Real Estate GTM Strategy",
    description:
      "Built a ground-up go-to-market strategy, conducted policy research, and positioned 40 Acres' community real estate ownership platform.",
    tags: ["GTM", "Policy Research", "Market Positioning"],
    mapX: 70.9,
    mapY: 33.3,
  },
  {
    id: "civic-engagement-app-ux",
    domain: "Public Tech",
    city: "Detroit, MI",
    partner: "Politics on the Go",
    partnerUrl: "https://politicsonthego.info",
    title: "Civic Engagement App UX Research",
    description:
      "Led UX research and designed an app that makes political information more accessible and helps students stay informed.",
    tags: ["UX Research", "Civic Tech"],
    mapX: 72.4,
    mapY: 33.3,
  },
];
