import type { LucideProps } from "lucide-react";
import type { IconType } from "react-icons/lib";

export interface iAboutMeHighLigth {
  title: string;
  description: string;
  icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType;
}
