import { useEffect, useState } from "react";
const MOBILE_BREAKPOINT:number = 768;

// CUSTOM HOOK MEDIAQUERY
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // EFECTO AL MONTAR
  useEffect(() => {
    const mql:MediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    //  FUNCION DE EVENTO DE CAMBIO
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT); //SERA VERDAD QUE ESTA EN MOVIL SI EL ANCHO ES MENOR BREAKPOINT
    };
    //SUCRIPCION A EVENTO DEL DOM REAL
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return Boolean(isMobile);
}

export default useIsMobile;