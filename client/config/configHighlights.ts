import type { iAboutMeHighLigth } from "@/interface/iAboutMeHighLigth";
import { Code2, Lightbulb, Users } from "lucide-react";
// CONFIGUARACION PARA SECCION ACERCA DE MI
export const highlights: iAboutMeHighLigth[] = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building scalable applications with React, TypeScript, and modern backend technologies.",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description:
      "Approaching complex challenges with innovative solutions and attention to detail.",
  },
  {
    icon: Users,
    title: "Collaborative & Communicative",
    description:
      "Working effectively with teams and stakeholders to deliver exceptional results.",
  },
];
