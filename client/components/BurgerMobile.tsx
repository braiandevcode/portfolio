import { IndexContext } from "@/context/IndexContext";
import { Menu, X } from "lucide-react";
import { useContext } from "react";

// BOTON DE MENU DE HABMBURGESA EN MOVIL
const BurgerMobile = () => {
  const { toggleMenu, isOpen } = useContext(IndexContext);
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default BurgerMobile;
