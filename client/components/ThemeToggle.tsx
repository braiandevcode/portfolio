import { useContext } from "react";
import { IndexContext } from "@/context/IndexContext";

// ICONO DE CAMBIO DE TEMA DE FONDO
const ThemeToggle= () => {
  const { toggleTheme, theme } = useContext(IndexContext);
  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
export default ThemeToggle;