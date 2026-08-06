# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Founding v0.1.0 releases for all eight projects, with real installation
  commands and release/activity listings.

### Changed

- Project statuses updated from "In development" to their shipped state;
  installation commands now point at the v0.1.0 releases.
- Category counts reflect the eight shipped projects.

## [1.0.0] - 2026-08-07

Initial release of the libnudget website.

### Added

- Landing page with hero, philosophy, projects, categories, discovery,
  activity, and principles sections
- Static project pages at `/projects/<slug>/` with overview, installation,
  repository, license, and related tools
- Interactive project discovery with search and filters shared via the URL
  (`?language=rust&type=action`)
- Custom 404 page
- About page at `/about`
- Full metadata: Open Graph, Twitter cards, canonical URLs, JSON-LD
  Organization schema, sitemap, robots.txt, and web app manifest
- Custom logo with `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, and
  social preview image
- GitHub Actions deployment to GitHub Pages with automatic build date
- Repository governance: `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`,
  `CHANGELOG.md`, and license
- Single-theme design with the Inter typeface, no dark mode
