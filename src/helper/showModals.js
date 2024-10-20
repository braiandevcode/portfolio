import queryAjax from "../js/ajax.js";
import updateClassName from "./updateClassName.js";
// ARREGLO DE MENSAJES PARA MODAL
const contentInfoModal = await queryAjax(
  "http://127.0.0.1:3000/src/assets/json/messagesModal.json",
  null
);

const modalContainer = document.querySelector(".modal"), //SELECTORES DE MODALES
  modalInfo = document.querySelector(".modal__info");

// FUNCION AUXILIAR PARA CREAR NODO DE TEXTO
const createText = (el, text) => {
  let textNode = document.createTextNode(text);
  el.append(textNode);
};

// CONFIGURACION PARA CREAR MODALES
const configureModal = (info) => {
  const templateModal = document.getElementById(
    "template-modal-alerts"
  ).content;
  const clone = templateModal.cloneNode(true);
  createText(clone.querySelector("h3"), info.title);
  updateClassName("add", clone.querySelector("i"), null, info.icon);
  clone.querySelector("p").textContent = info.description;

  while (modalInfo.firstElementChild) {
    modalInfo.removeChild(modalInfo.firstElementChild);
  }

  modalInfo.append(clone);
};

// FUNCION PARA MODAL DE MENSAJES
export const showModalsMessageAlert = (indexMessage) => {
  const infoModal = contentInfoModal[indexMessage];
  configureModal(infoModal);
  updateClassName("remove", modalContainer, null, "modal--hidden");

  document.addEventListener("click", (e) => {
    // EVENTO AL BOTON OK (CERRAR MODAL)
    if (e.target.matches(".modal__btn-action")) {
      e.preventDefault();
      updateClassName("add", modalContainer, null, "modal--hidden");
    }
  });
};
