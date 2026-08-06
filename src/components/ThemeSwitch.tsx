"use client"

import { useEffect, useRef, useState } from "react"

type Theme = "system" | "light" | "dark"

const STORAGE_KEY = "libnudget:theme"

const DARK = "#0d1117"
const LIGHT = "#ffffff"

function IconMonitor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function IconSun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function IconMoon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const options: { value: Theme; label: string; Icon: typeof IconMonitor }[] = [
  { value: "system", label: "System", Icon: IconMonitor },
  { value: "light", label: "Light", Icon: IconSun },
  { value: "dark", label: "Dark", Icon: IconMoon },
]

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(resolved)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute("content", resolved === "dark" ? DARK : LIGHT)
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system"
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    applyTheme(theme)
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      if (readStoredTheme() === "system") applyTheme("system")
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [theme])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  function select(next: Theme) {
    localStorage.setItem(STORAGE_KEY, next)
    setTheme(next)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change appearance"
        title="Appearance"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
      >
        <IconMonitor className="size-5" />
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Appearance"
          className="absolute right-0 top-full z-50 mt-2 w-40 rounded-md border border-line bg-background p-1"
        >
          {options.map(({ value, label, Icon }) => {
            const active = value === theme
            return (
              <button
                key={value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => select(value)}
                className={`flex w-full items-center gap-2.5 rounded px-2.5 py-1.5 text-sm ${
                  active
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-line hover:text-foreground"
                }`}
              >
                <Icon className="size-4" />
                <span className="flex-1 text-left font-medium">{label}</span>
                {active && (
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
