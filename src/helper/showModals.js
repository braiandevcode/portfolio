import updateClassName from "./updateClassName.js";
// ARREGLO DE MENSAJES PARA MODAL
const contentInfoModal = [
  {
    title: "Entrada invalida",
    description:
      "El valor debe ser mayor que cero, Por favor, ingrese un número mayor que cero.",
    icon: "bi-info-square-fill",
  },
  {
    title: "Caracteres inválidos",
    description: "Solo se admiten números. Por favor, ingrese un valor válido.",
    icon: "bi-dash-circle-fill",
  },
  {
    title: "Stock Insuficiente",
    description:
      "No hay suficiente stock disponible para este producto.Por favor ingrese un rango válido al stock del producto.",
    icon: "bi-exclamation-square-fill",
  },
  {
    title: "Agregado",
    description: "El producto se ha añadido al carrito exitosamente.",
    icon: "bi-check-circle-fill",
  },

  {
    title: "Cancelado",
    description: "Su compra fue cancelada exitosamente!",
    icon: "bi-check-circle-fill",
  },

  {
    title: "Pago",
    description: "Su pago se ha enviado con éxito!. Gracias por su compra",
    icon: "bi-check-circle-fill",
  },
  {
    title: "Campos vacios",
    description:
      "Los campos no pueden estar vacios. Todos los campos deben estar llenos.",
    icon: "bi-dash-circle-fill",
  },
  {
    title: "Datos Enviados",
    description: "Sus datos fueron enviados con exito.",
    icon: "bi-check-circle-fill",
  },
];
const modalContainer = document.querySelector(".modal"), //SELECTORES DE MODALES
  modalInfo = document.querySelector(".modal__info");
// modalOverlay = d.querySelector(".modal-overlay"),
// FUNCION AUXILIAR PARA CREAR NODO DE TEXTO
const createText = (el, text) => {
  let textNode = document.createTextNode(text);
  el.append(textNode);
};

// // FUNCION PAARA GENERAR RUTA AMIGABLE
// function smoothScrollToSection(e) {
//   const targetId = e.target.getAttribute("href")?.substring(1);
//   const targetElement = document.querySelector(`[data-section="${targetId}"]`);

//   if (targetElement) {
//     targetElement.scrollIntoView({ behavior: "smooth" });
//   }
// }

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
    // smoothScrollToSection(e);
  });
};
