import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const siteUrl = "https://libnudget.github.io"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "libnudget",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://github.com/libnudget"],
  description: "Small developer tools.",
}

export const viewport: Viewport = {
  themeColor: "#1f883d",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "libnudget",
    template: "%s · libnudget",
  },
  description: "Small developer tools.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "libnudget",
    description: "Small developer tools.",
    siteName: "libnudget",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "libnudget — small tools that do one thing well",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "libnudget",
    description: "Small developer tools.",
    images: ["/og.png"],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  )
}
