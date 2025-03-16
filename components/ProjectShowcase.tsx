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
    title: "Next-Strix",
    description:
      "An e-commerce web app build with Next js Stripe API and Vercel",
    technologies: ["Nextjs", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    githubLink: "https://github.com/sandazzz/next-strix",
    liveLink: "https://next-strix.vercel.app/",
  },
  {
    title: "Githread",
    description:
      "A responsive web application that allows users to create and share threads (posts) using their GitHub account.",
    technologies: ["Next.js", "Shadcn UI", "Prisma", "Next-Auth", "PostgreSQL"],
    githubLink: "https://github.com/sandazzz/githread-youtube",
    liveLink: "https://githread-youtube-steel.vercel.app/",
  },
  {
    title: "???",
    description: "???",
    technologies: ["React"],
    githubLink: "https://github.com/",
    liveLink: "https://vercel.com",
  },
];

export function ProjectShowcase() {
  return (
    <section className="py-12 md:mb-64">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h2>
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
