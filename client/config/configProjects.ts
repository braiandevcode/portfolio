import type { iProject } from "@/interface/iProjects";

export const projects: iProject[] = [
  {
    id: "1",
    title: "Secure Password Generator",
    description: "A simple password generator that allows users to choose the password length, generate secure passwords, and copy them to the clipboard with a single click.",
    image: "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1766860968/bjissq1cfuj3s07reqgv.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://braiandevcode.github.io/generate-pass/",
    github: "https://github.com/braiandevcode/generate-pass",
  },
  {
    id: "2",
    title: "Voice recorder",
    description:"A simple voice recorder built with JavaScript that uses the browser MediaRecorder API to record audio and play it back directly in the browser.",
    image: "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1766861716/zyc6sjytyvy1fduzyumv.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://braiandevcode.github.io/Grabador_Voz/",
    github: "https://github.com/braiandevcode/Grabador_Voz",
  },
  {
    id: "3",
    title: "Weather City",
    description:
    "Weather app built with React and TypeScript that consumes the OpenWeather API to display real-time weather information by city, including temperature and current conditions.",
    image: "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1766880484/urjbckqjgl2xq6w0dogi.png",
    tags: ["React", "OpenWeather API", "Typescript", 'CSS'],
    link: "https://api-weather-three.vercel.app/",
    github: "https://github.com/braiandevcode/api-weather",
  },
  {
    id: "4",
    title: "MB Supermercados",
    description:
  "A frontend-only supermarket web app developed as a team project, featuring product listing, shopping cart functionality, localStorage persistence, price calculations, and a simulated checkout modal.",
    image: "https://res.cloudinary.com/dsdb2dbqs/image/upload/v1766862147/qgorsd8bgqbstzxuwfpg.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://braiandevcode.github.io/TP1-Frontend/",
    github: "https://github.com/braiandevcode/TP1-Frontend",
  },
];

