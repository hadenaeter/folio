# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New profile section under landing section, with placeholders for sub-sections.
- New emblem image/banner at top of landing section.
- Complete profile education section.

### Changed

- Updated `pnpm` packages to latest versions:
    - `dependencies`: `next-video`
    - `devDependencies`: `tailwindcss/postcss`, `tailwindcss`
- Changed topbar text size up 1 level each (e.g. `sm` to `base`, `base` to `lg`).
- Wrapped showcase video Aspect Ratio component with `<div>` wrapper.

### Removed



## [0.0.5] - 2025-11-08

### Added

- Welcome and intro in landing section.
- `h-header-height` value in `globals.css`.

### Changed

- Now using Baskervville font by ANRT as default font (font set in `layout.tsx`).
- Replaced `<div>` wrapper for showcase video with a shadcn/ui Aspect Ratio component.

## [0.0.4] - 2025-11-04

### Added

- `next-video` for videos in Next.js.
- Mux for video hosting and optimization.
- Video showcase to landing page. It's actually 2 videos: one for wide screens, and one for vertical screens (e.g. mobile phone).

### Changed

- Topbar now centers navigation items.
- Topbar dropdown is now centered around the dropdown trigger for wide screens.
- Switched to `pnpm` for package management, replacing `npm`.
- Edited descriptions of some items in topbar menu.

## [0.0.3] - 2025-11-01

### Added

- Comments to `globals.css` pointing out and describing theme variables.
- To-do and details added to `README.md`.

## [0.0.2] - 2025-11-01

### Added

- Topbar made with shadcn/ui.
- Placeholders for body and footer.

## [0.0.1] - 2025-10-31

### Added

- This `CHANGELOG.md` file.
- Introduction in `README.md`.

### Removed

- Placeholder files and code from Next.js project initialization.