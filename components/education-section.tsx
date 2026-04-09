import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const education = [
  {
    period: "Sep 2023 — Jun 2027",
    degree: "Bachelor of Science",
    field: "Computer Science & Software Engineering",
    institution: "Maynooth University",
    institutionUrl: "https://www.maynoothuniversity.ie/",
    achievement: "Second Class Honours in 1st and 2nd year",
    skills: ["Java", "JavaScript", "C#", "C", "SQL", "R", "React", "Node.js"],
  },
  {
    period: "2023",
    degree: "Leaving Certificate",
    field: "",
    institution: "Tallaght Community School",
    institutionUrl: "#",
    achievement: "360 Points, highest grade in maths",
    skills: [],
  },
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </div>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
              aria-label={edu.period}
            >
              {edu.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div className="inline-flex items-baseline text-base font-medium leading-tight text-foreground group/link">
                  <GraduationCap className="mr-2 inline-block size-4 shrink-0 translate-y-px" />
                  <span>
                    {edu.degree}
                    {edu.field && ` — ${edu.field}`}
                  </span>
                </div>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {edu.institution}
                </a>
              </p>
              {edu.achievement && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {edu.achievement}
                </p>
              )}
              {edu.skills.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Skills learned">
                  {edu.skills.map((skill) => (
                    <li key={skill}>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
