import { navItems } from "@/config/configNavItems";
import { IndexContext } from "@/context/IndexContext";
import { useContext } from "react";

const Nav = () => {
  const { scrollToSection } = useContext(IndexContext);
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="text-left px-4 py-3 md:px-3 md:py-2 text-base font-medium rounded-md hover:bg-accent hover:text-portfolio-accent transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
export default Nav;
