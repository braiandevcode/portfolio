import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-7xl sm:text-8xl font-bold text-portfolio-accent mb-4">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Page Not Found
            </p>
            <p className="text-slate-600 text-lg mb-8">
              Oops! The requested page was not found
            </p>
          </div>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            <Link to={"/"}>
              Return to Home
              <ArrowLeft size={20} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
