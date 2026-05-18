# Plan B — Rush Técnico

Docs site del plan de estudio técnico de Rush. Cubre el stack real del proyecto: fundaciones compartidas + 3 tracks paralelos (Backend, Frontend, DevOps).

Construido con Astro + Starlight y desplegado en Cloudflare Pages desde la rama `master`.

## Para quién

Devs que se suman al equipo Rush y necesitan agarrar el contexto técnico antes de tocar código de producción.

## Cómo correrlo local

Necesitas Node 20.18.0+ y pnpm 11+.

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
├── _meta/                     # Páginas de referencia (glosario, how-to)
├── modulo-0/                  # Módulo 0 — obligatorio para todos (~40 hs)
├── track-be/                  # Track Backend (~130-180 hs)
│   └── extras/                # Unidades extra BE
├── track-fe/                  # Track Frontend (~95-140 hs)
│   └── extras/                # Unidades extra FE
└── track-devops/              # Track DevOps (~75-100 hs)
    └── extras/                # Unidades extra DevOps
```

## Stack del docs site

| Paquete    | Version  |
| ---------- | -------- |
| Node       | 20.18.0+ |
| pnpm       | 11+      |
| Astro      | 6.x      |
| Starlight  | 0.39.x   |
| Tailwind   | 4.x      |
| TypeScript | 6.x      |

## Stack del plan de estudios

Versiones de referencia que cubren las unidades:

| Tecnologia     | Version |
| -------------- | ------- |
| NestJS         | 11.x    |
| Drizzle ORM    | 0.36.x  |
| PostgreSQL     | 17.x    |
| React          | 19.x    |
| TanStack Query | 5.x     |
| BullMQ         | 5.x     |
| Better Auth    | latest  |

## Cómo contribuir

Lee [docs-internal/contributing.md](docs-internal/contributing.md) antes de abrir un PR.

## Code review process

El detalle de cómo funciona el code review al finalizar cada track está en [src/content/docs/\_meta/code-review-process.md](src/content/docs/_meta/code-review-process.md).

## Deploy

Cloudflare Pages con auto-deploy desde `master`. Preview deploys activos por PR.

- Build command: `pnpm install --frozen-lockfile && pnpm build`
- Output: `dist/`
- Node version: `20.18.0`
