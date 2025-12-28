import { useContext } from "react";
import { IndexContext } from "@/context/IndexContext";
import LogoAndIconTheme from "./LogoAndIconTheme";
import BurgerMobile from "./BurgerMobile";
import Nav from "./Nav";
import useIsMobile from "@/hooks/use-mobile";

// NAVEGACION
export default function NavBar() {
  const { isOpen } = useContext(IndexContext);
  const isMobile: boolean = useIsMobile();
  return (
    <nav className="sticky top-0 z-50 border border-b bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <LogoAndIconTheme />
          {/* NAVEGACION E ESCRITORIO */}
          {!isMobile && <Nav />}
          {/* BOTON DE MENU EN MOVIL*/}
          <BurgerMobile />
        </div>

        {/* NAVEGACION EN MOVIL/TABLET*/}
        {isMobile && isOpen && (
          <div className="md:hidden border-t ">
            <Nav />
          </div>
        )}
      </div>
    </nav>
  );
}
