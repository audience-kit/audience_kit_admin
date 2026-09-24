# AudienceKit Admin

Administrative web interface for AudienceKit, built with React 19, Relay and Vite.

## Requirements

- Node.js 22 or newer
- [Bun](https://bun.sh) (the lockfile is `bun.lock`; npm also works)
- The AudienceKit GraphQL API running locally on `http://localhost:3000/graphql`,
  or `VITE_GRAPHQL_URL` pointing at another endpoint

## Scripts

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `bun install`   | Install dependencies                              |
| `bun run dev`   | Start the dev server on http://localhost:4000     |
| `bun run relay` | Regenerate Relay artifacts in `src/__generated__` |
| `bun run build` | Compile Relay, typecheck, and build to `dist/`    |
| `bun run lint`  | Run ESLint                                        |
| `bun run test`  | Run the Vitest suite                              |

The GraphQL schema used by the Relay compiler lives in `data/schema.graphql`.
