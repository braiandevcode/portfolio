import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import type { iFormData } from "./IFormData";

// PROPS DE COMPONENTE FORMULARIO CONTACTO CONTACTO
export interface iContactProps{
    // ESTADOS
    formData:iFormData; 
    submitted:boolean;
    isSubmitting:boolean; 
    setFormData:Dispatch<SetStateAction<iFormData>>;
    setSubmitted:Dispatch<SetStateAction<boolean>>;
    setIsSubmitting:Dispatch<SetStateAction<boolean>>;

    // VARIABLE COMUN
    disableSubmit:boolean;

    // EVENTOS
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    scrollToContact:() => void;
    classEventChange:(name: string) => string;
}