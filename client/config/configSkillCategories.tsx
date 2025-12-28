import type { iSkillCategory } from "@/interface/iSkillCategory";
import { EFocusedSkills } from "@/lib/types/EFocusedSkills";
import { EBackend, EDatabase, EDesign, EFrontend, EPerformance, EVersionsControl } from "@/lib/types/enumTecnologies";
import { Code2, Database, Zap, GitBranch, Palette, Server } from "lucide-react";
// CONFIGURACION SKILLS
export const skillCategories: iSkillCategory[] = [
  {
    name: EFocusedSkills.FRONTEND,
    icon: <Code2 className="w-6 h-6" />,
    skills: [EFrontend.JS, EFrontend.TS, EFrontend.REACT, EFrontend.TCSS],
  },
  {
    name: EFocusedSkills.BACKEND,
    icon: <Server className="w-6 h-6" />,
    skills: [EBackend.NODEJS, EBackend.NESTJS],
  },
  {
    name: EFocusedSkills.DATABASES,
    icon: <Database className="w-6 h-6" />,
    skills: [EDatabase.DB_PG, EDatabase.DB_MSQL, EDatabase.DB_MDB],
  },
  {
    name: EFocusedSkills.PERFORMANCE,
    icon: <Zap className="w-6 h-6" />,
    skills: [EPerformance.WEB_PERFORMANCE, EPerformance.DEV_TOOL],
  },
  {
    name: EFocusedSkills.CTRL_VERSION,
    icon: <GitBranch className="w-6 h-6" />,
    skills: [EVersionsControl.GIT, EVersionsControl.GIT_HUB],
  },
  {
    name: EFocusedSkills.DESIGN,
    icon: <Palette className="w-6 h-6" />,
    skills: [EDesign.FIGMA, EDesign.UI_UX, EDesign.CSS],
  },
];