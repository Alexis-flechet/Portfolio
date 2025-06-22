import projects from "@/data/ProjectsData";
import { Section } from "lucide-react";

const ProjectContent = ({ id }) => {
  const currentProject = projects.find((p) => String(p.id) === id);

  if (!currentProject)
    return <p className="text-center mt-10">Projet introuvable.</p>;

  const sections = [
    { title: "Introduction", label: "intro", content: currentProject.introduction },
    { title: "Missions du projet", label: "missions", content: currentProject.missions },
    { title: "Déroulé du projet", label: "explanation", content: currentProject.explanation },
    { title: "Conclusion", label: "conclusion", content: currentProject.conclusion },
  ];

  const imgpath = "/images/projects/" + id + "/";

  return (
    <section className="container py-12 space-y-16">
      <header className="space-y-2 text-center mt-16">
        <h1 className="text-3xl md:text-5xl font-bold animate-fade-in">
          {currentProject.title}{" "}
          <span className="text-primary text-4xl">
            | {currentProject.subject}
          </span>
        </h1>
      </header>

      {/* Sections dynamiques */}
      {sections.map((section, index) => (
        <section id={section.label} key={index} className="space-y-10">
          <h3 className="text-2xl font-semibold text-glow text-left text-primary">
            {section.title}
          </h3>

          {/* Paragraphes et images */}
          {section.content?.map((item, idx) => {
            const isLeftAligned = item.align === "left";

            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isLeftAligned ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <p
                  className={`text-lg leading-relaxed animate-fade-in text-justify text-muted-foreground ${
                    item.image ? "" : ""
                  }`}
                >
                  {item.text}
                </p>
                {item.image && (
                  <img
                    src={imgpath + item.image}
                    alt=""
                    className="max-w-md w-full rounded-md shadow-md animate-fade-in"
                  />
                )}
              </div>
            );
          })}
        </section>
      ))}
      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="/" className="cosmic-button">
          Retrourner à la page principale
        </a>
      </div>
    </section>
  );
};

export default ProjectContent;
