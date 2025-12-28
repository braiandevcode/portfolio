import type { Dispatch, SetStateAction } from "react";

// MENSAJE DE MODAL
export interface iModal {
  // ESTADOS
  modalVisible:boolean;
  modalMessage:string, 
  modalType:"success" | "error", 
  setModalMessage:Dispatch<SetStateAction<string>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setModalType:Dispatch<SetStateAction<"success" | "error">>;
   
  //FUNCIONES Y EVENTOS
  onClose: () => void;
}
