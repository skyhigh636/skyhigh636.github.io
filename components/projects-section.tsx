import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Skybot",
    description:
      "A Discord bot built using Discord.JS template. Modified the initial rock, paper, scissors command to challenge other users and added a dice roll command with configurable sides, wager, and desired number. Hosted locally using Ngrok with a deployment workflow using ESLint, Lerna, and Jest.",
    image: "/projects/skybot.jpg",
    url: "https://github.com/skyhigh636",
    technologies: ["Discord.js", "Node.js", "Jest", "ESLint", "Lerna", "Ngrok"],
  },
  {
    title: "WorldHello",
    description:
      "An SDL3-based game engine with implemented core 2D rendering components. Gained extensive experience with modern C++ development tools and graphics programming fundamentals.",
    image: "/projects/worldhello.jpg",
    url: "https://github.com/skyhigh636",
    technologies: ["C++", "SDL3", "2D Rendering", "Game Development"],
  },
  {
    title: "Your Only Choice is Hustle",
    description:
      "A game project featuring designed and implemented game logic using data structures. Transitioned from linked lists to hashmaps for improved performance. Built a system that reads and processes game data from text files, exploring automation and optimization techniques.",
    image: "/projects/hustle.jpg",
    url: "https://github.com/skyhigh636",
    technologies: ["Data Structures", "Hashmaps", "File Processing", "Game Logic"],
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span>
                    {project.title}
                    <ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div className="z-10 sm:order-1 sm:col-span-2">
              <Image
                src={project.image}
                alt={`${project.title} project thumbnail`}
                width={200}
                height={120}
                className="rounded border-2 border-muted/40 transition group-hover:border-muted/60 sm:translate-y-1"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
