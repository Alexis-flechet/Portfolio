import { useParams } from "react-router-dom";
import projects from "@/data/projectsData";
import ProjectContent from "@/components/ProjectDetails/ProjectContent";
import { ProjectNavbar } from "@/components/ProjectDetails/ProjectNavbar";


export const Project = () => {
  const { id } = useParams();
  const currentProject = projects.find(p => String(p.id) === id);

  if (!currentProject) return <p className="text-center mt-10">Projet introuvable.</p>;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ProjectNavbar />
      <ProjectContent id = {id} />
    </div>

  );
};

