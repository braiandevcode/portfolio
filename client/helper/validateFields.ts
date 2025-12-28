
import { z } from "zod";
import { contactSchema } from "./contactSchema";
import type { TValidateFields } from "@/lib/types/typeValidateFieldsProps";
import type { TFormErrors } from "@/lib/types/typesFormError";

// VALIDACIONES DE CAMPOS
const validateFields = ({field, value, setErrors}: TValidateFields): void => {
  try {
    switch (field) {
      case "name":      
        contactSchema.pick({ name: true }).parse({ name: value });
        break;
      case "email":
        contactSchema.pick({ email: true }).parse({ email: value });
        break;
      case "message":
        contactSchema.pick({ message: true }).parse({ message: value });
        break;
      default:
        return;
    }

    //SI PASA VALIDACION LA ELIMINO
    setErrors(prevErrors => {
      const newErrors:TFormErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });

  } catch (err:unknown) {
    if (err instanceof z.ZodError) {
       const fieldError = err.issues[0]?.message;
      setErrors(prevErrors => ({
        ...prevErrors,
        [field]: fieldError,
      }));
    }
  }
};


export default validateFields;