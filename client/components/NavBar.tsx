import { useContext } from "react";
import { IndexContext } from "@/context/IndexContext";
import LogoAndIconTheme from "./LogoAndIconTheme";
import ThemeToggle from "./ThemeToggle";
import BurgerMobile from "./BurgerMobile";
import Nav from "./Nav";
import useIsMobile from "@/hooks/use-mobile";

export default function NavBar() {
  const { isOpen, toggleMenu } = useContext(IndexContext);
  const isMobile: boolean = useIsMobile();
  return (
    <nav className="sticky top-0 z-50 border-b bg-background text-foreground">
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={toggleMenu}
        />
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-16">
          <LogoAndIconTheme />

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <Nav />
            </div>
          )}

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <BurgerMobile />
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 border-t" : "max-h-0"
          }`}
        >
          <div className="py-2">
            <Nav />
          </div>
        </div>
      </div>
    </nav>
  );
}
