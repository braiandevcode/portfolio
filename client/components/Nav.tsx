import { navItems } from "@/config/configNavItems";
import { IndexContext } from "@/context/IndexContext";
import useIsMobile from "@/hooks/use-mobile";
import { useContext } from "react";

// SECCION NAV
const Nav = () => {
  const { scrollToSection } = useContext(IndexContext);
  const isMobile:boolean = useIsMobile();
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 justify-center items-center md:gap-8">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className={!isMobile ? ' text-center hover:text-portfolio-accent transition-colors font-medium' : 'text-center block w-full text-left px-2 py-1 md:px-3 md:py-2 text-base font-medium hover:text-portfolio-accent rounded-md transition-colors'}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
export default Nav;
