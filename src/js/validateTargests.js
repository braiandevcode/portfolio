// ---IMPORTAMOS MODULOS PERSONALIZADOS------//
import updateClassName from "../helper/updateClassName.js";
import dowloadCv from "./dowloadCv.js";
import { handleNext, handlePrev } from "./validateMedia.js";

// ALMACENO DOCUMENT PARA ABREVIAR LLAMADA AL DOCUMENT.
const d = document;

// ---LOCALIZACION DE ELEMENTOS DEL DOCUMENTO HTML----//
const subMenuCv = d.querySelector(".sub-menu__cv");
const navigation = d.querySelector(".container-header__nav");
const iconClosed = d.querySelector(".bi-x-square-fill");
const iconOpen = d.querySelector(".container-header__list i");

// FUNCION PAARA GENERAR RUTA AMIGABLE
function smoothScrollToSection(e) {
  const targetId = e.target.getAttribute("href")?.substring(1);
  const targetElement = d.querySelector(`[data-section="${targetId}"]`);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// -->FUNCIÓN QUE SE ENCARGA DE VALIDAR LOS TARGET DE CLICK.//
export const validateTargetsClick = (e) => {
  //-->VARIABLES LOCALES
  const up = "bi-caret-up-fill",
    down = "bi-caret-down-fill";

  let isCv = e.target.textContent === "CV";
  let isCarteIcon = e.target.matches(`.${up}`) || e.target.matches(`.${down}`);

  // LOCALIZAMOS ICONOS PARA DESPLEGAR.
  const iconUp = d.querySelector(`.${up}`),
    iconDown = d.querySelector(`.${down}`);

  if (e.target.matches("#cv-en")) dowloadCv(e); // ->SI CONTIENE EL ID CORRESPONDIENTE cv-en

  if (e.target.matches("#cv-es")) dowloadCv(e); // ->SI CONTIENE EL ID CORRESPONDIENTE cv-es

  // --> SI CV ES TRUE Y SI ES LA CLASE CORRESPONDIENTE DE ICONOS A EVALUAR
  if (isCv || isCarteIcon) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    updateClassName("toggle", subMenuCv, null, "sub-menu__cv--show"); //FUNCION PARA ACCIONES DE CLASSLIST.

    // SI ES EL ICONO HACIA ARRIBA
    if (iconUp) updateClassName("replace", iconUp, down, up);

    // SI ES EL ICONO HACIA ABAJO
    if (iconDown) updateClassName("replace", iconDown, up, down);
  }

  // SI CONTIENEN CLASE .bi-list
  if (e.target.matches(".bi-list")) {
    updateClassName("toggle", navigation, null, "container-header__nav--show");
    updateClassName("toggle", iconClosed, null, "bi-x-square-fill--hide");
    updateClassName("toggle", e.target, null, "bi-list--hide");
  }
  // SI CONTIENEN CLASE .bi-x-square-fill
  if (e.target.matches(".bi-x-square-fill")) {
    updateClassName("toggle", navigation, null, "container-header__nav--show");
    updateClassName("toggle", iconOpen, null, "bi-list--hide");
    updateClassName("toggle", iconClosed, null, "bi-x-square-fill--hide");
  }

  //EVENTO A BOTON SIGUIENTE
  if (e.target.matches(".bi-arrow-right-circle-fill")) {
    e.preventDefault();
    handleNext();
  }

  // EVENTO A BOTON ATRAS
  if (e.target.matches(".bi-arrow-left-circle-fill")) {
    e.preventDefault();
    handlePrev();
  }

  smoothScrollToSection(e);
};
