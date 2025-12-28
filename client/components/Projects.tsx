import { projects } from "@/config/configProjects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* SECCION CABECERA */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-portfolio-accent rounded-full" />
        </div>

        {/* PROYECTOS GRILLA */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* IMAGEN */}
              <div className="overflow-hidden h-48 sm:h-56 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* ETIQUETAS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full border border-border"
                    >
                    {tag}
                    </span>
                  ))}
                </div>

                {/* ENLACES */}
                <div className="flex gap-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-semibold rounded-lg transition-colors"
                  >
                    View <ExternalLink size={16} />
                  </Link>

                  <Link
                    to={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 border border-border text-foreground hover:text-portfolio-accent font-semibold rounded-lg transition-colors"
                  >
                    Code <FaGithub size={16} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// export default Projects;
