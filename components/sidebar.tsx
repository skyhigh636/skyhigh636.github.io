"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/skyhigh636", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-ajoku-262790367/", icon: Linkedin },
  { name: "Email", href: "mailto:emmanuel.ajoku.2024@mumail.ie", icon: Mail },
]

export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:px-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <Link href="/">Emmanuel Ajoku</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
          Software Engineering Student
        </h2>
        <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
          Building scalable systems with a focus on automated testing and backend development.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-6" aria-label="Social links">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              <link.icon className="size-5" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
