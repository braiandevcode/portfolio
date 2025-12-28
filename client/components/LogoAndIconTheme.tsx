import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const LogoAndIconTheme = () => {
  return (
    <div className="flex items-center gap-x-6">
      {/* ICONO DE TEMA */}
      <ThemeToggle />
      {/* LOGO */}
      <div className="flex-shrink-0">
        <Link
          to={"/"}
          className="text-2xl font-bold hover:text-portfolio-accent transition-colors"
        > Portfolio
        </Link>
      </div>
    </div>
  );
};

export default LogoAndIconTheme;
