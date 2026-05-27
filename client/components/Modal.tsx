import { IndexContext } from "@/context/IndexContext";
import { useContext } from "react";
import { X } from "lucide-react";

export default function Modal() {
  const { type, message, onClose } = useContext(IndexContext);
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-background text-foreground p-6 rounded-lg shadow-lg w-full max-w-md text-center relative border border-border">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-md hover:bg-accent transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <h2
          className={`text-xl font-bold mb-2 ${
            type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {type === "success" ? "Success" : "Error"}
        </h2>
        <p className="mt-4 text-muted-foreground">{message}</p>
        <button
          className="mt-6 px-6 py-2 bg-portfolio-accent text-white font-semibold rounded-lg hover:bg-portfolio-accent-hover transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}