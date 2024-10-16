import { showModalsMessageAlert } from "../helper/showModals.js";

// LOCALIZAOS ELEMENTOS DE HTML
const inputs = document.querySelectorAll(".form__input");
const form = document.getElementById("form-contact");
const btnSubmit = document.getElementById("btnSubmit");

// Carácteres para validar
const minCharacter = "abcdefghijklmnñopqrstuvwxyz";
const mayusCharacter = minCharacter.toUpperCase();
const simbols = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

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
    sendEmail();
  }
};

const sendEmail = async () => {
  try {
    const formData = new FormData(form);
    const response = await fetch(
      "https://server-portfolio-arrb.onrender.com/api/send-email",
      {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    if (response.ok) {
      showModalsMessageAlert(7);
      btnSubmit.textContent = "Enviar";
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.log("FAILED...", error);
    showModalsMessageAlert(8);
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
  sendEmail().then(() => {
    form.reset(); // Vaciamos los campos después de enviar el correo
  });
});
