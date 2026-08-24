# M Dhruv — AI & Systems Portfolio

This is a self-contained React + Vite portfolio with all generated visual assets in `client/public/assets/`.

## Local setup

Use a current Node.js LTS release, then run the following from the project root.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To create a production build, run:

```bash
pnpm build
```

The portfolio source is organized as follows:

| Path | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Portfolio page composition |
| `client/src/components/` | Reusable navigation, telemetry, project, and terminal modules |
| `client/src/data/portfolio.ts` | Resume and project content model |
| `client/src/index.css` | Full responsive visual system |
| `client/public/assets/` | Logo plus hero and project visuals |

## Personalization

Update the links and email address in `client/src/pages/Home.tsx` and `client/src/components/TerminalContact.tsx` if your public details change. Project content is centralized in `client/src/data/portfolio.ts`.
