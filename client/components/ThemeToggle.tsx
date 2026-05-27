import { useContext } from "react";
import { IndexContext } from "@/context/IndexContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(IndexContext);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-accent transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
export default ThemeToggle;