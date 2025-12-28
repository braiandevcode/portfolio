import type { TTheme } from "./types/typeThemes";

const STORAGE_KEY: string = "theme";

// APLICAR TEMA EN STORAGE
export const applyTheme = (theme: TTheme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
};

// LEER CLAVE EN STORAGE
export const getStoredTheme = (): TTheme => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
};
