import Link from "next/link"
import Section from "./Section"
import { getProject, releases, recentlyUpdated } from "@/lib/projects"

export default function Activity() {
  return (
    <Section
      id="activity"
      eyebrow="Latest Activity"
      title="What's happening."
      description="New releases and recent changes across the collection."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-base font-semibold">Latest Releases</h3>
          <ul className="mt-4 flex flex-col">
            {releases.map((release) => {
              const project = getProject(release.slug)
              if (!project) return null
              return (
                <li
                  key={release.version}
                  className="flex items-center justify-between border-b border-line py-3.5 last:border-b-0"
                >
                  <span className="font-mono text-sm text-accent">
                    {release.version}
                  </span>
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {project.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rounded-xl border border-line p-6">
          <h3 className="text-base font-semibold">Recently Updated</h3>
          <ul className="mt-4 flex flex-col">
            {recentlyUpdated.map((activity) => {
              const project = getProject(activity.slug)
              if (!project) return null
              return (
                <li
                  key={activity.label}
                  className="flex items-center justify-between border-b border-line py-3.5 last:border-b-0"
                >
                  <span className="text-sm text-muted">{activity.label}</span>
                  <Link
                    href={`/projects/${project.slug}/`}
                    className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {project.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
