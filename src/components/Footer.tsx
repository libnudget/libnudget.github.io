const licenseUrl =
  "https://github.com/libnudget/libnudget.github.io/blob/main/LICENSE"

const buildDate = process.env.BUILD_DATE

const links = [
  { href: "https://github.com/libnudget", label: "GitHub" },
  { href: "https://github.com/libnudget", label: "Documentation" },
  { href: "https://github.com/palmshed", label: "A Palmshed company" },
  { href: licenseUrl, label: "License" },
  { href: "mailto:hello@libnudget.dev", label: "Contact" },
  { href: "/about/", label: "About" },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold tracking-tight">libnudget</p>
          <p className="text-sm text-muted">
            © libnudget ·{" "}
            <a
              href={licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              MIT License
            </a>
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {buildDate ? (
            <p className="text-sm text-muted">Last updated {buildDate}</p>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
