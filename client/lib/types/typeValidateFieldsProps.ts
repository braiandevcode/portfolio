import type { Dispatch, SetStateAction } from "react";
import type { TFormErrors } from "./typesFormError";
import type { iFormData } from "@/interface/IFormData";

// PROPS PARA VALIDACIONES
export type TValidateFields = {
  field: keyof iFormData;
  value: string;
  setErrors: Dispatch<SetStateAction<TFormErrors>>;
};