import { skillCategories } from "@/config/configSkillCategories";
// HABILIDADES
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-portfolio-accent rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="p-6 border rounded-lg hover:border-portfolio-accent hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-portfolio-accent to-blue-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border text-sm font-medium rounded-full hover:border-portfolio-accent hover:text-portfolio-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;