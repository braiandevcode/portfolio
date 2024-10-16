import updateClassName from "../helper/updateClassName.js";

// LOCALIZAMOS ELEMENTOS DEL DOCUMENTO.
const navigation = document.querySelector(".container-header__nav");
const iconListOrTheme = document.querySelector(".container-header__theme i");
const socialMenu = document.querySelector(".social__menu");
const slideShow = document.querySelector(".slide");
const rootHtml = document.documentElement;

// FUNCION REUTILIZABLE PARA USO DE TRANSICION EN SLIDE
const handleSlideTransition = (callBackInsertElement) => {
  // METODO DE TRANSICIÓN
  const transition = () => {
    // REMOVER CLASES DE TRANSICION Y TRASNLATE
    updateClassName(
      "remove",
      slideShow,
      null,
      "slide--translate",
      "slide--transition"
    );

    // ACTUALIZO PROPIEDADES EN VARIABLES CSS
    rootHtml.style.setProperty("--transition-slide", "none");
    rootHtml.style.setProperty("--translate-slide", 0);
    updateClassName("add", slideShow, null, "slide--reset");

    // FUNCION A EJECUTAR PARA AGREGAR ELEMENTOS HIJOS MEDIANTE UN METODO ESPECIFICO.
    callBackInsertElement();

    // SE RESTAURA VARIABLE CSS DESPUES DE 10MS
    setTimeout(() => {
      rootHtml.style.setProperty(
        "--transition-slide",
        "transform .3s ease-out"
      );
      updateClassName("remove", slideShow, null, "slide--reset");
    }, 10);

    // SE REMUEVE EVENTO DE TRANSICION PARA PODER VOLVER A INICIALIZAR
    slideShow.removeEventListener("transitionend", transition);
  };

  // EVENTO DE TRANSICION
  slideShow.addEventListener("transitionend", transition);
};

// FUNCION SIGUIENTE
export const handleNext = () => {
  // tiene elementos hijos
  if (slideShow.children.length > 0) {
    const firstChild = slideShow.firstElementChild;
    const sizesSlide = firstChild.offsetWidth;
    rootHtml.style.setProperty("--translate-slide", `-${sizesSlide}px`);

    updateClassName(
      "add",
      slideShow,
      null,
      "slide--translate",
      "slide--transition"
    );

    handleSlideTransition(() => slideShow.append(firstChild));
  }
};
// FUNCION ATRAS
export const handlePrev = () => {
  // tiene elementos hijos
  if (slideShow.children.length > 0) {
    const lastChild = slideShow.lastElementChild;
    const firstChild = slideShow.firstElementChild;
    const sizesSlide = firstChild.offsetWidth;

    rootHtml.style.setProperty("--translate-slide", `${sizesSlide}px`);

    updateClassName(
      "add",
      slideShow,
      null,
      "slide--translate",
      "slide--transition"
    );
    // updateClassName(slideShow, "slide--transition");

    handleSlideTransition(() => slideShow.insertBefore(lastChild, firstChild));
  }
};

// FUNCION PARA VALIDAR LA MEDIAQUERYS.
export const validateMedia520 = (media) => {
  const hide = "container-header__nav--hide";
  const show = "container-header__nav--show";
  if (media) {
    updateClassName("replace", navigation, show, hide);
    updateClassName("replace", iconListOrTheme, "bi-brightness-low", "bi-list");
    return;
  }
  updateClassName("replace", navigation, hide, show);
  updateClassName("replace", iconListOrTheme, "bi-list", "bi-brightness-low");
};

export const validateMedia767 = (media) => {
  media
    ? updateClassName("replace", socialMenu, "f-col", "f-row")
    : updateClassName("replace", socialMenu, "f-row", "f-col");
};
