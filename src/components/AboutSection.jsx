import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           À propos de <span className="text-primary">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
                
            </h3>

            <p className="text-muted-foreground">
              Étudiant en informatique, je m'investis dans tous les processus de développement, 
              du backend à l'interface utilisateur, jusqu'au déploiement.
              Mon objectif ? Devenir développeur fullstack professionnel.
            </p>

            <p className="text-muted-foreground">
                Toujours fasciné par les nouveaux outils développés, 
                j'essaie de comprendre leur fonctionnement en profondeur. Cette curiosité 
                me permet d'apprécier la complexité des problèmes, mais surtout 
                l'ingéniosité des solutions apportées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me contacter
              </a>

              <a
                href="/FlechetAlexis_CVDevFullStack.pdf" download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Développement d'applications</h4>
                  <p className="text-muted-foreground">
                  Création d'applications complètes à l'aide des outils récents de déploiement
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Design UI/UX</h4>
                  <p className="text-muted-foreground">
                    Mise en place d'interfaces simples et intuitives pour l'utilisateur
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Organisation de projets</h4>
                  <p className="text-muted-foreground">
                    Gestion de projets tout le long du développement en respectant des méthodes d'organisation agile avec scrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};