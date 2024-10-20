import { mediaQuerysMin } from "../helper/mediaQuerys.js";
import { showModalsMessageAlert } from "../helper/showModals.js";
import queryAjax from "./ajax.js";
import { eventClick } from "./events.js";
import { validateMedia568, validateMedia767 } from "./validateMedia.js";

// LOCALIZAMOS ELEMENTOS DE HTML
const $inputs = document.querySelectorAll(".input-data .input");
const $form = document.getElementById("form-contact");
const $btnSubmit = document.getElementById("btnSubmit");

// Carácteres para validar email
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let url = "https://server-portfolio-arrb.onrender.com";

// FUNCIÓN PARA INICIALIZAR EMAILJS
const initServiceEmailJs = async () => {
  const configEmailJs = await queryAjax(`${url}/api/config`, null);
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
    await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form); // Uso librería
    showModalsMessageAlert(7);
    $btnSubmit.value = "Enviar";
  } catch (error) {
    console.log("FAILED...", error);
    showModalsMessageAlert(10);
  }
};

// FUNCIÓN PARA VALIDAR EL NAME DE LOS INPUT Y CONVERTIR CARACTERES
const validateNameInput = (input) => {
  const nameInput = input.name;
  let value = input.value;
  if (nameInput === "email") {
    if (emailRegExp.test(value)) {
      value = value.toLowerCase();
    } else {
      showModalsMessageAlert(8);
      return false;
    }
  } else {
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  input.value = value; // Actualizamos el valor del input en el DOM
  return true;
};

// FUNCIÓN PARA VALIDAR QUE TODOS LOS CAMPOS ESTÉN LLENOS
const allFieldsFilled = () => {
  let allFilled = true;
  $inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });
  return allFilled;
};

// EVENTO SUBMIT
$form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita el envío estándar del formulario
  let valid = true;
  $inputs.forEach((input) => {
    valid = validateNameInput(input) && valid;
  });

  if (!allFieldsFilled()) {
    showModalsMessageAlert(9);
  }

  if (valid && allFieldsFilled()) {
    initServiceEmailJs().then((configEmailJs) => {
      $btnSubmit.value = "Enviando...";
      postEmail($form, configEmailJs).then(() => {
        $form.reset(); // Vaciamos los campos después de enviar el correo
      });
    });
  }
});

// MEDIAQUERYS FORM-->
mediaQuerysMin(520, validateMedia568);
mediaQuerysMin(767, validateMedia767);
eventClick();
