import { IndexContext } from "@/context/IndexContext";
import { Menu, X } from "lucide-react";
import { useContext } from "react";

const BurgerMobile = () => {
  const { toggleMenu, isOpen } = useContext(IndexContext);
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-accent transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

export default BurgerMobile;
