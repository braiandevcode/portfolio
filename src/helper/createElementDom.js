// Aqui creamos funcion para crear elementos del Dom
export const CREATE_ELEMENT = (
  tag,
  attrs = null,
  isText = false,
  text = null
) => {
  let element = document.createElement(tag);
  for (const attribute in attrs) {
    if (attrs.hasOwnProperty(attribute)) {
      element.setAttribute(attribute, attrs[attribute]);
    }
  }
  if (isText && text) {
    element.textContent = text;
  }

  return element;
};
