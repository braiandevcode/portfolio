import type { iContactInfo } from "@/interface/iContactInfo";
import { Mail, MapPin, Phone } from "lucide-react";

// CONFIGURACION PARA AINFO DE CONTACTO
export const contactInfo:iContactInfo[] = [
  {
    icon: MapPin,
    label: "Location",
    value: "Buenos Aires, AR",
  },
  {
    icon: Phone,
    label: "Phone",
    value: `+54 (2284) ${import.meta.env.VITE_NUMBER}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: `${import.meta.env.VITE_EMAIL}`,
  },
];
