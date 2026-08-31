import { Bus, Home, Zap, Database, type LucideIcon } from "lucide-react";
import type { Domain } from "@/data/caseStudies";

export const domainIcons: Record<Domain, LucideIcon> = {
  Mobility: Bus,
  "Real Estate": Home,
  Energy: Zap,
  "Policy & Data": Database,
};
