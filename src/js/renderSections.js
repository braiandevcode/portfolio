import updateClassName from "../helper/updateClassName.js";
import queryAjax from "./ajax.js";
let url = "https://braiandevcode.github.io/portfolio";
// FUNCION PARA RENDERIZAR TARJETAS DE PROYECTOS
export const renderSectionProyects = async () => {
  const $TEMPLATE_PROYECT = document.getElementById("template-proyects");
  const $SECTION_PROYECT_ELEMENT = document.querySelector(".section-proyects");
  const $FRAGMENT = document.createDocumentFragment();

  // INVOCAR FUNCION PARA HACER LA PETICION
  const result = await queryAjax(
    `${url}/src/assets/json/proyects_es.json`,
    null
  );

  result.forEach((data) => {
    //CLONAR CONTENIDO DE PLANTILLA
    const _$CLONE = document.importNode($TEMPLATE_PROYECT.content, true);

    // ACTUALIZAMOS EL CLON
    updateClassName(
      "add",
      _$CLONE.querySelector(".article-proyect"),
      null,
      "d-flex",
      "f-col",
      "ai-center",
      "g-1x"
    );

    updateClassName(
      "add",
      _$CLONE.querySelector(".article-proyect__desription"),
      null,
      "d-flex",
      "ai-center"
    );

    updateClassName(
      "add",
      _$CLONE.querySelector(".article-proyect__info"),
      null,
      "d-flex",
      "ai-center",
      "f-col"
    );

    _$CLONE.querySelector(".article-proyect__title").textContent = data.title;
    _$CLONE
      .querySelector(".article-proyect__image")
      .setAttribute("src", `./src/assets/images/${data.image}`);
    _$CLONE
      .querySelector(".article-proyect__image")
      .setAttribute("alt", data.title);
    _$CLONE.querySelector("p").textContent = data.description;

    // AGREGO EL CLON AL FRAGMENTO
    $FRAGMENT.appendChild(_$CLONE);
  });

  // AGREGACION DE FRAGMENTO A SECCION DE PROYECTO
  $SECTION_PROYECT_ELEMENT.appendChild($FRAGMENT);
};

// FUNCION PARA RENDERIZAR TARJETAS DE PROYECTOS
export const renderSectionSkills = async () => {
  const $TEMPLATE_PROYECT = document.getElementById("template-skills");
  const $SECTION_PROYECT_ELEMENT = document.querySelector(".section-skills");
  const $FRAGMENT = document.createDocumentFragment();

  // INVOCAR FUNCION PARA HACER LA PETICION
  const result = await queryAjax(`${url}/src/assets/json/skills.json`, null);

  result.forEach((data) => {
    //CLONAR CONTENIDO DE PLANTILLA
    const _$CLONE = document.importNode($TEMPLATE_PROYECT.content, true);

    // ACTUALIZAMOS EL CLON
    updateClassName(
      "add",
      _$CLONE.querySelector(".article-skill"),
      null,
      "d-flex",
      "jc-center",
      "ai-center",
      "g-1x",
      "animate__animated",
      "animate__flipInY"
    );

    _$CLONE.querySelector(".article-skill__title").textContent = data.title;
    _$CLONE
      .querySelector(".article-skill__image")
      .setAttribute("src", `./src/assets/images/${data.logo}`);
    _$CLONE
      .querySelector(".article-skill__image")
      .setAttribute("alt", data.title);

    // AGREGO EL CLON AL FRAGMENTO
    $FRAGMENT.append(_$CLONE);
  });

  // AGREGACION DE FRAGMENTO A SECCION DE PROYECTO
  $SECTION_PROYECT_ELEMENT.appendChild($FRAGMENT);
};
