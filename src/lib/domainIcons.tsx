import { Bus, Home, Zap, Landmark, Cpu, DraftingCompass, type LucideIcon } from "lucide-react";
import type { Domain } from "@/data/caseStudies";

export const domainIcons: Record<Domain, LucideIcon> = {
  Mobility: Bus,
  "Real Estate": Home,
  Energy: Zap,
  Government: Landmark,
  "Public Tech": Cpu,
  AEC: DraftingCompass,
};
