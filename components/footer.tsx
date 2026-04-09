export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  )
}
