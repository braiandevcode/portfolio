import type { iProject } from "@/interface/iProjects";
export const projects: iProject[] = [
  {
    id: "1",
    title: "Raffle Panel",
    description: "Simple web application to register number buyers, assign them positions on a board, and maintain a visual state of the raffle from a clear and responsive interface.It is a personal practice project, designed for local execution, but developed with criteria of organization, readability, and progressive evolution towards a more complete solution",
    image: "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1777438352/jp5ckylbv0p3xia1ymdd.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://braiandevcode.github.io/buy-raffle/",
    github: "https://github.com/braiandevcode/buy-raffle",
  },
  {
    id: "2",
    title: "LiquidChofer",
    description:
      "Shift calculator for car rental and taxi agency drivers. Solves the tedious end-of-day accounting: total billed, gas expenses, percentages (agency, driver, rented car), trips to factories with negotiated prices, and generates a receipt in PDF or to share via WhatsApp. Everything is saved in localStorage, no registration or connection required.",
    image:
      "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1788409780/fopmq6uimylcomkbwirp.png",
    tags: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND"],
    link: "https://liquid-chofer.vercel.app/",
    github: "https://github.com/braiandevcode/LiquidChofer",
  },
];

