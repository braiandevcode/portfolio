import type { TIndexGlobal } from "@/lib/types/typeIndexGlobal";
import { createContext } from "react";

// VALORES POR DEFECTO
const defaultContextIndex: TIndexGlobal = {
  // ESTADOS
  formData: { name: "", email: "", message: "" },
  submitted: false,
  isOpen: false,
  theme: "light",
  message: "",
  type: "success",
  modalMessage: "",
  modalType: "success",
  modalVisible: false,
  errors:{'': ''},
  disableSubmit:false,
  isSubmitting:false,
  setIsSubmitting: () => {},
  setErrors: () => {},
  setMessage:() => {},
  setType: () => {},
  setModalMessage: () => {},
  setModalType: () => {},
  setModalVisible: () => {},
  setIsOpen: () => {},
  setSubmitted: () => {},
  setTheme: () => {},
  setFormData: () => {},

  // FUNCIONES Y EVENTOS
  classEventChange: () => '',
  onClose: () => {},
  toggleTheme: () => {},
  toggleMenu: () => {},
  scrollToContact: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
  scrollToSection: () => {},
};
// EXPORTO CONTEXTTO INDEX
export const IndexContext = createContext(defaultContextIndex);
