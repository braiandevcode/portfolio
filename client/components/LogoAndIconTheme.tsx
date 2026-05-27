import { Link } from "react-router-dom";

const LogoAndIconTheme = () => {
  return (
    <div className="flex-shrink-0">
      <Link
        to={"/"}
        className="text-2xl font-bold hover:text-portfolio-accent transition-colors"
      >
        Portfolio
      </Link>
    </div>
  );
};

export default LogoAndIconTheme;
