import { showModalsMessageAlert } from "../helper/showModals.js";

// LOCALIZAOS ELEMENTOS DE HTML
const inputs = document.querySelectorAll(".form__input");
const form = document.getElementById("form-contact");
const btnSubmit = document.getElementById("btnSubmit");

// Carácteres para validar
const minCharacter = "abcdefghijklmnñopqrstuvwxyz";
const mayusCharacter = minCharacter.toUpperCase();
const simbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// FUNCIÓN PARA OBTENER CONFIGURACIÓN DE EMAILJS
const getConfigEmailJs = async () => {
  try {
    const query = await fetch("http://localhost:3000/api/config");
    if (!query.ok) {
      throw new Error(`Error ${query.status}: ${query.statusText}`);
    }
    const result = await query.json();
    return result;
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

// FUNCIÓN PARA INICIALIZAR EMAILJS
const initServiceEmailJs = async () => {
  const configEmailJs = await getConfigEmailJs();
  if (configEmailJs) {
    const { USER_ID } = configEmailJs;
    emailjs.init(USER_ID); // User ID de EmailJS
    return configEmailJs;
  } else {
    showModalsMessageAlert(8);
    return null;
  }
};

// FUNCIÓN PARA ENVIAR EMAIL USANDO Emailjs
const postEmail = async (form, configEmailJs) => {
  const { TEMPLATE_ID, SERVICE_ID } = configEmailJs;
  try {
    const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form); // Uso librería
    showModalsMessageAlert(7);
    btnSubmit.textContent = "Enviar";
  } catch (error) {
    console.log("FAILED...", error);
    showModalsMessageAlert(8);
  }
};

const validatePhone = (input) => {
  const phone = input.value;
  const isChar = [...phone].some(
    (char) =>
      minCharacter.includes(char) ||
      mayusCharacter.includes(char) ||
      simbols.includes(char)
  );
  let isValidate = !isChar;
  isChar ? showModalsMessageAlert(1) : null;
  if (isValidate) {
    btnSubmit.textContent = "Enviando...";
    initServiceEmailJs().then((configEmailJs) => {
      if (configEmailJs) postEmail(form, configEmailJs);
    });
  }
};

// FUNCIÓN PARA VALIDAR EL NAME DE LOS INPUT Y CONVERTIR CARACTERES
const validateNameInput = (input) => {
  const nameInput = input.name;
  let value = input.value;
  if (nameInput === "email") value = value.toLowerCase();
  else if (nameInput !== "tel")
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  else if (nameInput === "tel") validatePhone(input);
  input.value = value; // Actualizamos el valor del input en el DOM
};

// EVENTO SUBMIT
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita el envío estándar del formulario
  inputs.forEach((input) => validateNameInput(input));
  // Enviar email y luego vaciar el formulario
  initServiceEmailJs().then((configEmailJs) => {
    if (configEmailJs) {
      postEmail(form, configEmailJs).then(() => {
        form.reset(); // Vaciamos los campos después de enviar el correo
      });
    }
  });
});
