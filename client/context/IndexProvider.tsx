import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import { IndexContext } from "./IndexContext";
import type { TIndexGlobal } from "@/lib/types/typeIndexGlobal";
import type { iFormData } from "@/interface/IFormData";
import type { TTheme } from "@/lib/types/typeThemes";
import { applyTheme, getStoredTheme } from "@/lib/theme";
import z from "zod";
import type { TFormErrors } from "@/lib/types/typesFormError";
import { contactSchema } from "@/helper/contactSchema";
import validateFields from "@/helper/validateFields";
import emailjs from "@emailjs/browser";

// PROVIDER INDEX PRINCIPAL
const IndexProvider = ({ children }: { children: ReactNode }) => {
  // ESTADOS NAVEGACION
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ESTADO DE MENSAJE ERROR/SUCCESS TEXTUAL
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"success" | "error">("success");

  // FUNCION PARA SCROLLEAR A CONTACTO
  const scrollToContact = () => {
    const contactSection: HTMLElement | null =
      document.getElementById("contact");
    // SI EXISTE ELEMENTO
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }); //SCROLLEAR A LA VISTA DE LA SECCION
    }
  };

  //TOGGLE DE MENU
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  //FUNCION PARA CAMBIAR TEMA DE COLOR DE FONDO
  const toggleTheme = (): void => {
    const next: TTheme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  // METODO PARA SCROLLEAR A SECCION POR ID
  const scrollToSection = (href: string): void => {
    const id: string = href.replace("#", "");
    const element: HTMLElement | null = document.getElementById(id);
    // SI EXISTE REFERENCIA
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // SCROLLEAR
      setIsOpen(false); //ESTADO DE ABIERTO/CERRADO
    }
  };

  //ESTADOS DE TEMA DE COLOR DE FONDO
  const [theme, setTheme] = useState<TTheme>(getStoredTheme());

  // ESTADOS FORMULARIO CONTACTO
  const [formData, setFormData] = useState<iFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false); //ENVIADO

  // ESTADOS DE LOS MODALES
  // INICIAMOS TODOS LOS ESTADOS NECESARIOS
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  //------------------------EVENTOS FORMULARIO DE CONTACTO----------------------------------------//
  const [errors, setErrors] = useState<TFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); //ENVIANDO

  const hasErrors: boolean = Object.keys(errors).length > 0;
  const isFormIncomplete: boolean = Object.values(formData).some(
    (value) => value.trim() === "",
  );
  const disableSubmit: boolean = isSubmitting || hasErrors || isFormIncomplete;

  const classInput: string =
    "focus:outline-none focus:ring-2 focus:border-transparent";

  const classEventChange = (name: string): string =>
    `${classInput} ${errors[name] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-accent"}`;

  // MANEJAR CAMBIOS EN FORMULARIO
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target; //DESESTRUCTURO TARGET PARA EXTRAER EL NAME Y EL VALOR

    // SETEO NUEVO VALOR EN CAMPO
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // VALIDACION EN TIEMPO REAL CON ZOD PARA CADA CAMPO
    let fieldError: string | undefined;

    // FUNCION PARA VALIDAR CAMPOS DE CONTACTO
    validateFields({ field: name as keyof iFormData, setErrors, value });

    // SI HAY UN ERROR LO AGREGO AL ESTADO
    if (fieldError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError,
      }));
    }
  };

  // SEND EMAILJS
  const sendEmail = async () => {
    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };

  // FUNCION PARA MANEJAR EL ENVIO DEL FORMULARIO
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // VALIDACION COMPLETA
      contactSchema.parse(formData);

      // ENVIO EMAILJS
      await sendEmail();

      // SUCCESS
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setModalMessage("¡Mensaje enviado con éxito!");
      setModalType("success");
      setModalVisible(true);
    } catch (error: unknown) {
      // ERROR
      if (error instanceof z.ZodError) {
        const newErrors: TFormErrors = {};
        error.issues.forEach(({ path, message }) => {
          const field = path[0] as string;
          newErrors[field] = message;
        });

        setErrors(newErrors);
      } else {
        setModalMessage("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        setModalType("error");
        setModalVisible(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const onClose = (): void => {
    setModalVisible(false);
  };

  //VALORES POR DEFECTO
  const valueDefaultContext: TIndexGlobal = {
    // ESTADOS
    formData,
    submitted,
    isOpen,
    theme,
    modalMessage,
    modalType,
    modalVisible,
    errors,
    message,
    type,
    disableSubmit,
    isSubmitting,
    setIsSubmitting,
    setMessage,
    setType,
    setModalMessage,
    setModalType,
    setModalVisible,
    setTheme,
    setIsOpen,
    setSubmitted,
    setFormData,
    setErrors,

    // EVENTOS
    onClose,
    classEventChange,
    toggleTheme,
    toggleMenu,
    scrollToContact,
    handleChange,
    handleSubmit,
    scrollToSection,
  };

  // RETORNAR
  return (
    <IndexContext.Provider value={valueDefaultContext}>
      {children}
    </IndexContext.Provider>
  );
};

export default IndexProvider;
