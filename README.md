# Plan B — Rush Técnico

Docs site del plan de estudio técnico de Rush. Cubre el stack real del proyecto: fundaciones compartidas + 3 tracks paralelos (Backend, Frontend, DevOps).

Construido con Astro + Starlight y desplegado en Cloudflare Pages desde la rama `main`.

## Para quién

Devs que se suman al equipo Rush y necesitan agarrar el contexto técnico antes de tocar código de producción.

## Contenido

80 unidades organizadas en 4 grupos. Tiempo estimado total: ~165 horas.

| Grupo | Unidades | Horas est. |
| ----- | -------- | ----------- |
| Módulo 0 — Fundaciones (obligatorio) | 12 | ~28 h |
| Track Backend (core + extras) | 23 + 5 = 28 | ~77 h |
| Track Frontend (core + extras) | 19 + 4 = 23 | ~63 h |
| Track DevOps (core + extras) | 14 + 3 = 17 | ~53 h |

## Cómo correrlo local

Necesitás Node 24 LTS y pnpm 11+.

```bash
pnpm install
pnpm dev
```

El sitio levanta en `http://localhost:4321`.

## Cómo construir el sitio

```bash
pnpm build
```

Produce `dist/`. El build incluye `astro check` (typecheck de content collections) antes de la compilación.

## Estructura del contenido

```
src/content/docs/
├── index.md                   # Landing page
├── meta/                      # Páginas de referencia (glosario, how-to, code review)
├── modulo-0/                  # Módulo 0 — obligatorio para todos (~28 h)
├── track-be/                  # Track Backend core (~57 h)
│   └── extras/                # Unidades extra BE (~20 h)
├── track-fe/                  # Track Frontend core (~52 h)
│   └── extras/                # Unidades extra FE (~11 h)
└── track-devops/              # Track DevOps core (~43 h)
    └── extras/                # Unidades extra DevOps (~10 h)
```

## Stack del docs site

| Paquete    | Version  |
| ---------- | -------- |
| Node       | 24 LTS   |
| pnpm       | 11+      |
| Astro      | 6.3.x    |
| Starlight  | 0.39.x   |
| Tailwind   | 4.x (via @tailwindcss/vite) |
| TypeScript | 6.x      |
| Zod        | 4.x      |

## Stack del plan de estudios

Versiones de referencia que cubren las unidades:

| Tecnología     | Versión |
| -------------- | ------- |
| NestJS         | 11.x    |
| Drizzle ORM    | 0.36.x  |
| PostgreSQL     | 17.x    |
| React          | 19.x    |
| TanStack Query | 5.x     |
| BullMQ         | 5.x     |
| Better Auth    | latest  |
| Vitest         | 3.x     |
| Playwright     | 1.x     |

## Cómo contribuir

Lee [docs-internal/contributing.md](docs-internal/contributing.md) antes de abrir un PR.

## Code review process

El detalle de cómo funciona el code review al finalizar cada track está en [src/content/docs/meta/code-review-process.md](src/content/docs/meta/code-review-process.md).

## Deploy

Cloudflare Pages con auto-deploy desde `main`.

- Build command: `pnpm install --frozen-lockfile && pnpm build`
- Output: `dist/`
- Node version: Node 24 LTS
