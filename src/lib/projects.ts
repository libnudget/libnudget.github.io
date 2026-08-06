export type Language = "Rust" | "Go" | "TypeScript" | "Python"

export type Category =
  "CLI" | "GitHub Action" | "Library" | "Template" | "Experiment"

export type SectionCategory =
  "CLI" | "GitHub" | "Libraries" | "Templates" | "Experiments"

export type Project = {
  name: string
  slug: string
  description: string
  language: Language
  category: Category
  github: string
  overview: string
  installation: string
  license: string
  status: "Stable" | "Experimental"
  related: string[]
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const languages: Language[] = ["Rust", "Go", "TypeScript", "Python"]

export const categories: {
  name: SectionCategory
  blurb: string
  count: number
}[] = [
  {
    name: "CLI",
    blurb: "Developer utilities for everyday workflows.",
    count: 2,
  },
  {
    name: "GitHub",
    blurb: "Actions, Apps, and automation.",
    count: 3,
  },
  {
    name: "Libraries",
    blurb: "Reusable building blocks.",
    count: 1,
  },
  {
    name: "Templates",
    blurb: "Project starters and boilerplates.",
    count: 1,
  },
  {
    name: "Experiments",
    blurb: "Ideas that may eventually become tools.",
    count: 1,
  },
]

export const projects: Project[] = [
  {
    name: "clipb",
    slug: "clipb",
    description: "A lightweight clipboard utility for developers.",
    language: "Rust",
    category: "CLI",
    github: "https://github.com/libnudget/clipb",
    overview:
      "clipb copies file paths to the system clipboard without leaving your terminal. It prints the copied paths back to stdout so you can chain it into other commands, and it handles spaces, symlinks, and relative paths correctly. No wrappers, no daemons, no bloat.",
    installation:
      "cargo install --git https://github.com/libnudget/clipb --tag v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["dotenv-keep", "craft"],
  },
  {
    name: "release-notes",
    slug: "release-notes",
    description: "GitHub Action for generating release notes.",
    language: "TypeScript",
    category: "GitHub Action",
    github: "https://github.com/libnudget/release-notes",
    overview:
      "release-notes reads the pull requests merged between two tags, groups them by conventional-commit type, and writes a markdown file you can attach to a GitHub release. It keeps the changelog honest without a dedicated changelog tool in the repo.",
    installation: "- uses: libnudget/release-notes@v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["gh-tag"],
  },
  {
    name: "fmtcheck",
    slug: "fmtcheck",
    description: "GitHub Action for formatting checks.",
    language: "Go",
    category: "GitHub Action",
    github: "https://github.com/libnudget/fmtcheck",
    overview:
      "fmtcheck runs your language's canonical formatter in check mode and fails the build on any diff. Formatting debates stay out of code review because the machine settles them in CI. Zero configuration for the common case.",
    installation: "- uses: libnudget/fmtcheck@v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["release-notes", "mini"],
  },
  {
    name: "mini",
    slug: "mini",
    description: "A minimal Go utility library.",
    language: "Go",
    category: "Library",
    github: "https://github.com/libnudget/mini",
    overview:
      "mini is a single-file HTTP client with no third-party dependencies. It keeps memory use small enough for embedded runtimes, exposes a straightforward request/response API, and can be vendored directly into any project.",
    installation: "go get github.com/libnudget/mini@v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["startkit"],
  },
  {
    name: "startkit",
    slug: "startkit",
    description: "Minimal project template for new libraries.",
    language: "TypeScript",
    category: "Template",
    github: "https://github.com/libnudget/startkit",
    overview:
      "startkit gives you a publish-ready library with nothing beyond the essentials: a test runner, a linter, and a release script. Run it, rename it, and ship. It follows the libnudget principles by making the small choices for you.",
    installation: "npx --yes github:libnudget/startkit#v0.1.0 mylib",
    license: "MIT",
    status: "Stable",
    related: ["mini"],
  },
  {
    name: "craft",
    slug: "craft",
    description: "Experimental Rust developer tool.",
    language: "Rust",
    category: "Experiment",
    github: "https://github.com/libnudget/craft",
    overview:
      "craft explores installing tools as single, signed binaries without package-manager lock-in. It is an experiment: the interface may change, and the philosophy is being tested. Try it, break it, and tell us what you find.",
    installation:
      "cargo install --git https://github.com/libnudget/craft --tag v0.1.0",
    license: "MIT",
    status: "Experimental",
    related: ["clipb"],
  },
  {
    name: "dotenv-keep",
    slug: "dotenv-keep",
    description: "Keep and manage `.env` files safely.",
    language: "Python",
    category: "CLI",
    github: "https://github.com/libnudget/dotenv-keep",
    overview:
      "dotenv-keep compares your .env.example against the variables referenced in your code and reports names that are missing, unused, or drifted. It catches the silent misconfig that only shows up in production.",
    installation:
      "pip install git+https://github.com/libnudget/dotenv-keep@v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["clipb"],
  },
  {
    name: "gh-tag",
    slug: "gh-tag",
    description: "GitHub Action for automated version tagging.",
    language: "TypeScript",
    category: "GitHub Action",
    github: "https://github.com/libnudget/gh-tag",
    overview:
      "gh-tag creates annotated semver tags from your release notes in CI, without storing credentials in plaintext. It pairs with release-notes to turn a push into a fully tagged release.",
    installation: "- uses: libnudget/gh-tag@v0.1.0",
    license: "MIT",
    status: "Stable",
    related: ["release-notes"],
  },
]

export type Release = {
  version: string
  slug: string
}

export const releases: Release[] = [
  { version: "v0.1.0", slug: "clipb" },
  { version: "v0.1.0", slug: "craft" },
  { version: "v0.1.0", slug: "dotenv-keep" },
  { version: "v0.1.0", slug: "fmtcheck" },
  { version: "v0.1.0", slug: "gh-tag" },
  { version: "v0.1.0", slug: "mini" },
  { version: "v0.1.0", slug: "release-notes" },
  { version: "v0.1.0", slug: "startkit" },
]

export type Activity = {
  label: string
  slug: string
}

export const recentlyUpdated: Activity[] = [
  { label: "Initial release", slug: "clipb" },
  { label: "Initial release", slug: "craft" },
  { label: "Initial release", slug: "dotenv-keep" },
  { label: "Initial release", slug: "fmtcheck" },
  { label: "Initial release", slug: "gh-tag" },
  { label: "Initial release", slug: "mini" },
  { label: "Initial release", slug: "release-notes" },
  { label: "Initial release", slug: "startkit" },
]

export const philosophy = [
  {
    title: "Small over large",
    body: "A tool should be small enough to read, reason about, and replace.",
  },
  {
    title: "Stable over clever",
    body: "Predictable behavior beats impressive internals.",
  },
  {
    title: "Useful over busy",
    body: "Features earn their place by solving real problems.",
  },
  {
    title: "Independent by design",
    body: "Every project stands on its own. No lock-in, no scaffolding.",
  },
]

export const principles = [
  "solve one problem",
  "stay easy to understand",
  "have clear documentation",
  "remain independently useful",
]

export const searchFilters = {
  languages,
  categories: ["CLI", "GitHub Action", "Library", "Template"] as Category[],
}
