import type { TTheme } from "@/lib/types/typeThemes";
import type { Dispatch, SetStateAction } from "react";

// FIRMA PROPS DE COMPONENTE ICONO DE TEMA COLOR DE FONDO
export interface iThemeProps {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
  toggleTheme: () => void;
}
