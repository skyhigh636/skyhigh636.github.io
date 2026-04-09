export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a third-year{" "}
          <span className="font-medium text-foreground">Software Engineering</span> student
          at{" "}
          <a
            href="https://www.maynoothuniversity.ie/"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maynooth University
          </a>{" "}
          with hands-on experience in software testing, code optimization, and
          scalable system design.
        </p>
        <p>
          I have a strong interest in{" "}
          <span className="font-medium text-foreground">automated testing pipelines</span>{" "}
          and{" "}
          <span className="font-medium text-foreground">backend development</span>, with a
          focus on improving CI/CD workflows and code quality. I enjoy solving
          complex problems and building systems that are both maintainable and
          efficient.
        </p>
        <p>
          Currently, I&apos;m completing my internship at{" "}
          <a
            href="#experience"
            className="font-medium text-foreground hover:text-primary transition-colors"
          >
            PropTech Deliverables Limited
          </a>
          , where I&apos;m refactoring backend systems, implementing tests, and
          contributing to CI/CD improvements using tools like Lerna, Jest, and
          ESLint.
        </p>
        <p>
          My technical toolkit includes{" "}
          <span className="font-medium text-foreground">Java</span>,{" "}
          <span className="font-medium text-foreground">JavaScript</span>,{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Node.js</span>, and cloud
          platforms like{" "}
          <span className="font-medium text-foreground">Microsoft Azure</span> and{" "}
          <span className="font-medium text-foreground">Vercel</span>.
        </p>
      </div>
    </section>
  )
}
