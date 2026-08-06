import type { Metadata } from "next"
import Link from "next/link"
import { principles } from "@/lib/projects"

export const metadata: Metadata = {
  title: "About",
  description:
    "libnudget is a collection of small tools for software engineering.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-line">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8 lg:py-16">
          <Link
            href="/"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            ← Home
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight lg:text-4xl">
            About
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6 py-12 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-foreground/80">
            libnudget is a collection of small tools for software engineering.
            Every project is designed to solve one problem well and remain
            independently useful.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            No company history. No marketing. Just tools that earn their place
            by staying small, stable, and easy to understand.
          </p>
          <ul className="mt-10 flex flex-col gap-3">
            {principles.map((principle) => (
              <li key={principle} className="flex items-center gap-3">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-medium">{principle}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/#projects"
            className="mt-10 inline-block rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  )
}
