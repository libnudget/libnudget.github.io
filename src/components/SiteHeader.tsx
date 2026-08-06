import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#categories", label: "Categories" },
  { href: "/#discovery", label: "Discovery" },
  { href: "/#activity", label: "Activity" },
  { href: "/about/", label: "About" },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          libnudget
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://github.com/libnudget"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-line px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-foreground md:inline-block"
          >
            GitHub
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
