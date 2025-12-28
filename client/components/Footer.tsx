import { Heart } from "lucide-react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

// PIE DE PAGINA
export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  const { pathname } = useLocation();
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-sm text-slate-400">FullStack Developer | BP</p>
          </div>

          {/* NAVEGACION E ESCRITORIO */}
          {pathname === "/" && <Nav />}
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Made with <Heart size={16} className="text-red-500" /> by Me
          </p>
          <p className="text-xs text-slate-400 mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
