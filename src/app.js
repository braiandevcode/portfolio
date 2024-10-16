// IMPORTACION DE MODULOS.
import { mediaQuerysMin } from "./helper/mediaQuerys.js";
import updateClassName from "./helper/updateClassName.js";
import { eventClick } from "./js/events.js";
import {
  renderSectionProyects,
  renderSectionSkills,
} from "./js/renderSections.js";
import { validateMedia520, validateMedia767 } from "./js/validateMedia.js";

const _pClassName = "profile__presentation";
const profilePresentation = document.querySelector(`.${_pClassName}`);

// FUNCION PARA EFECTO DE APARICION DE DESCRIPCION EN EL HOME.
const showDesc = () => {
  const newClasName = `${_pClassName}--visible`;
  updateClassName("add", profilePresentation, null, newClasName);
};

const app = () => {
  // Añadir presentacion ni bien recarge la web
  showDesc();
  eventClick();
  renderSectionProyects();
  renderSectionSkills();
  // Mediaquery > 520px
  mediaQuerysMin(520, validateMedia520);
  mediaQuerysMin(767, validateMedia767);
};

export default app;
