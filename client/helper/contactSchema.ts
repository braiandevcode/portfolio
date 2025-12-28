import { z } from "zod";

// LISTA PARCIAL DE DOMINIOS TEMPORTALES
const temporaryEmailDomains:string[] = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "discard.email",
  "fakeinbox.com",
  "getnada.com",
  "emailondeck.com",
];

export const contactSchema = z.object({
  name: z
    .string({ message: "El nombre es obligatorio" })
    .min(1, { message: "El nombre no puede estar vacío" })
    .max(50, { message: "El nombre es demasiado largo" })
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      { message: "El nombre solo puede contener letras y espacios" }
    ),
  email: z
    .string({ message: "El email es obligatorio" })
    .min(1, { message: "El email no puede estar vacío" })
    .email({ message: "Debe ser un email válido" })
    .max(100, { message: "El email es demasiado largo" })
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      return !temporaryEmailDomains.some((temp) =>
        domain?.endsWith(temp)
      );
    }, {
      message: "No se permite el uso de correos temporales",
    }),

  message: z
    .string({ message: "El mensaje es obligatorio" })
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(1000, { message: "El mensaje es demasiado largo" }),
});
