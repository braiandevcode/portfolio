import type { TFormErrors } from "@/lib/types/typesFormError";
import type { Dispatch, SetStateAction } from "react";

// MENSAJES DE ERROR TEXTUALES
export interface iTextError {
  //ESTADOS
  message: string;
  type: "success" | "error";
  errors:TFormErrors, 
  setType: Dispatch<SetStateAction<"success" | "error">>;
  setMessage: Dispatch<SetStateAction<string>>;
  setErrors: Dispatch<SetStateAction<TFormErrors>>
}
