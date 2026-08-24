# Source Files — Save in This Structure

The package preserves this exact structure. Each source file is separate and ready to place in the matching path in a local repository.

```text
dhruv-portfolio/
├── client/
│   ├── index.html
│   ├── public/
│   │   └── assets/
│   │       ├── aero-airfoil-system-visual.png
│   │       ├── apex-battery-system-visual.png
│   │       ├── dhruv-md-vector-logo.png
│   │       └── telemetry-hero-visual.png
│   └── src/
│       ├── App.tsx
│       ├── index.css
│       ├── main.tsx
│       ├── components/
│       │   ├── BrandMark.tsx
│       │   ├── ProjectRecord.tsx
│       │   ├── SectionHeading.tsx
│       │   ├── SiteHeader.tsx
│       │   ├── TelemetryPanel.tsx
│       │   └── TerminalContact.tsx
│       ├── data/
│       │   └── portfolio.ts
│       └── pages/
│           └── Home.tsx
├── patches/
│   └── wouter@3.7.1.patch
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

The `client/src/components/ui/`, `contexts/`, `hooks/`, and `lib/` directories remain in the package because the generated project scaffold supplies shared UI and runtime support. No changes are needed in those supporting files.

After extracting, run `pnpm install` and then `pnpm dev` from the package root.
