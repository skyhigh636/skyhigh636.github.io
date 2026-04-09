import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Developer",
    company: "TechCorp",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct the company's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2020 — 2022",
    title: "Developer",
    company: "StartupXYZ",
    companyUrl: "#",
    description:
      "Developed and shipped highly interactive web applications for clients including Fortune 500 companies. Built custom solutions with modern technologies and implemented complex features with a focus on user experience.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
  },
  {
    period: "2018 — 2020",
    title: "Junior Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Collaborated with designers and other developers to create responsive websites and web applications. Gained experience in front-end development, version control, and agile methodologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Sass"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
              aria-label={experience.period}
            >
              {experience.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span>
                      {experience.title} · {experience.company}
                      <ArrowUpRight className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {experience.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                {experience.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
        >
          View Full Résumé
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
