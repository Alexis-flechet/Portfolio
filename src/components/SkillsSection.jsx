import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Dev frontend
  { name: "HTML/CSS", category: "frontend", projectList : ["GroovAPI"] },
  { name: "JavaScript", category: "frontend", projectList : ["GroovAPI"] },
  { name: "Next.js", category: "frontend", projectList : ["GroovAPI"]  },
  { name: "React", category: "frontend", projectList : ["GroovAPI"]  },
  { name: "Tailwind CSS", category: "frontend", projectList : ["GroovAPI"]  },
  { name: "PHP Symfony", category: "frontend", projectList : ["GroovAPI"]  },

  // Dev backend
  { name: "Node.js", category: "backend", projectList : ["GroovAPI"]  },
  { name: "Express", category: "backend", projectList : ["GroovAPI"]  },
  { name: "MySQL", category: "backend", projectList : ["GroovAPI"]  },
  { name: "SQLite", category: "backend", projectList : ["GroovAPI"]  },
  { name: "MongoDB", category: "backend", projectList : ["GroovAPI"]  },
  
  // Langages languages
  { name: "C++", category: "Langages", projectList : ["QuadTree"]  },
  { name: "C#", category: "Langages", projectList : ["Noctowl's dream", "Projet Paintball"]  },
  { name: "Python", category: "Langages", projectList : ["Human Benchmark"]  },

  // Outils et logiciels
  { name: "Git/GitHub", category: "outils", projectList : ["Tous les projets"]  },
  { name: "Unity", category: "outils", projectList : ["Noctowl's dream", "Projet Paintball"]  },
  { name: "Visual Studio", category: "outils", projectList : ["Noctowl's dream", "Projet Paintball", "QuadTree"]  },
  { name: "VSCode", category: "outils", projectList : ["GroovAPI", "HumanBenchmark"]  }

];

const categories = ["Tous", "frontend", "backend", "Langages", "outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Tous" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="text-primary text-left">
                {skill.projectList.join (" - ")}
             </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};