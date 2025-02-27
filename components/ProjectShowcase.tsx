import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://your-ecommerce-platform.com",
  },
  {
    title: "Task Management App",
    description:
      "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current and forecasted weather data for multiple locations.",
    technologies: ["React", "Redux", "OpenWeatherMap API", "Chart.js"],
    githubLink: "https://github.com/yourusername/weather-dashboard",
    liveLink: "https://your-weather-dashboard.com",
  },
];

export function ProjectShowcase() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
