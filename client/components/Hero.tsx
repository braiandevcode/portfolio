import { IndexContext } from "@/context/IndexContext";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";

// HERO PAGINA
export default function Hero() {
  const { scrollToContact } = useContext(IndexContext);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* AVATAR */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-portfolio-accent to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-5xl sm:text-6xl font-bold text-white">
              BP
            </span>
          </div>

          {/* HEADDING */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Fullstack web developer
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fullstack web developer focused on building scalable, maintainable
              web applications using modern technologies like React, TypeScript,
              and Node.js.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              Get in Touch <ArrowRight size={20} />
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-background border-2 border-border text-foreground hover:bg-muted font-semibold rounded-lg transition-colors duration-200"
            >
              View My Work
            </button>
          </div>

          {/* SCROLL*/}
          <div className="pt-8 animate-bounce text-muted-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
