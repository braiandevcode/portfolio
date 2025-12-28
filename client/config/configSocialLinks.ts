import type { iSocialLinks } from "@/interface/iSocialLinks";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// LINK SOCIALES
export const socialLinks: iSocialLinks[] = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:braianpalacios699@gmail.com",
    label: "braianpalacios699@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: `${import.meta.env.VITE_LINKEDIN}`,
    label: "LinkedIn Profile",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: `${import.meta.env.VITE_GITHUB}`,
    label: "GitHub Profile",
  },
];
