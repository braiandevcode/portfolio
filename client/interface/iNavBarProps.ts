import type { Dispatch, SetStateAction } from "react";

// FIRMA DE PROPS COMPONENTE NAVEGACION
export interface iNavBarProps {
  // ESTADOS
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  // EVENTOS
  toggleMenu: () => void;
  // onNavigate?: (sectionId: string) => void;
  scrollToSection: (href: string) => void;
}
