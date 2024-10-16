import { validateTargetsClick } from "./validateTargests.js";
// Evento de click al documento globalmente
export const eventClick = () =>
  document.addEventListener("click", validateTargetsClick);
