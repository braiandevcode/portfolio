import { type LucideProps } from "lucide-react";
import type { IconType } from "react-icons/lib";
export interface iSocialLinks {
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  > | IconType;
  href: string;
  label: string;
}
