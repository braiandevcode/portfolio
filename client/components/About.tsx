import { highlights } from "@/config/configHighlights";

// ACERCA DE MI
export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* SECCION HEADER */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-portfolio-accent rounded-full"></div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* OLUMNA IZQUIERDA */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Fullstack Web Developer with a stronger focus on frontend
              development. I completed a two-year Fullstack program where I
              learned how to build web products from scratch, from planning and
              requirements to development and deployment. I have experience
              working in team-based environments using agile methodologies like
              Scrum, designing database models, and developing applications with
              React, TypeScript, NestJS, MySQL, MongoDB, Jira, and Git.
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="space-y-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="p-6 bg-card text-card-foreground rounded-lg border border-border hover:border-portfolio-accent hover:shadow-md transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <Icon className="w-6 h-6 text-portfolio-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
