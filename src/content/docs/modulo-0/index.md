---
title: Módulo 0 — Fundaciones
description: El módulo obligatorio que todo dev en Rush tiene que completar antes de elegir un track.
sidebar:
  order: 0
  badge:
    text: obligatorio
    variant: success
tags: [obligatorio, m0]
track: modulo-0
unit_type: indice
estimated_hours: 40
prerequisites: []
learning_outcomes:
  - Entender las herramientas base del stack Rush
  - Completar el módulo antes de elegir un track especializado
last_updated: '2026-05-17'
lab_runnable: false
extra: false
---

Antes de elegir entre Backend, Frontend o DevOps, hay un conjunto de conceptos que cualquier dev que trabaje en Rush necesita dominar. Eso es el Módulo 0.

No son opcionales. No son "nice to have". Son el piso mínimo para que puedas entender el código, contribuir sin romper cosas, y crecer en el equipo.

---

## ¿Qué cubre el Módulo 0?

Doce unidades organizadas en tres bloques:

### Herramientas base

| Unidad                                            | Qué aprendes                                   | Tiempo |
| ------------------------------------------------- | ---------------------------------------------- | ------ |
| [TypeScript sin trampa](./ts-estricto/)           | strict mode, genéricos, Zod inference          | ~3 hs  |
| [SQL de verdad](./sql-real/)                      | JOINs, índices, EXPLAIN ANALYZE, Postgres real | ~3 hs  |
| [Git como herramienta de equipo](./git-workflow/) | feature branches, squash merge, PRs limpios    | ~2 hs  |
| [Docker sin miedo](./docker-basico/)              | imagen, contenedor, Dockerfile, docker-compose | ~2 hs  |
| [pnpm y el workspace de Rush](./pnpm-monorepo/)   | workspaces, lockfile, publicar paquetes        | ~2 hs  |
| [Zod: validación que no miente](./zod-schemas/)   | schemas, parse, composición, shared-schemas    | ~2 hs  |

### Arquitectura y diseño

| Unidad                                                        | Qué aprendes                             | Tiempo |
| ------------------------------------------------------------- | ---------------------------------------- | ------ |
| [Clean Architecture sin ceremonias](./clean-arch-pragmatica/) | capas, dependencias hacia adentro        | ~3 hs  |
| [Screaming Architecture](./vertical-slices/)                  | módulos por dominio, no por tipo técnico | ~2 hs  |

### Flujo de trabajo en Rush

| Unidad                                                                   | Qué aprendes                            | Tiempo |
| ------------------------------------------------------------------------ | --------------------------------------- | ------ |
| [SDD: cómo Rush decide antes de codear](./sdd-flujo/)                    | pipeline SDD, humano dirige, IA ejecuta | ~2 hs  |
| [Claude Code y Engram como herramientas](./ai-tooling/)                  | Claude en terminal, Engram como memoria | ~2 hs  |
| [Observabilidad: ver qué pasa en producción](./observabilidad-concepto/) | logs Pino, métricas Prometheus, Grafana | ~2 hs  |
| [Testar es diseñar, no verificar](./testing-filosofia/)                  | Vitest, Testcontainers, Playwright      | ~3 hs  |

**Total**: ~28 hs de lab + ~12 hs de lectura = ~40 hs

---

## Cómo cursarlo

El orden recomendado es el que aparece en las tablas de arriba. Algunas unidades tienen prerequisites explícitos — fíjate en el frontmatter de cada una.

Si ya conoces bien algún tema, no tienes que hacer el lab completo. Pero sí tienes que completar el **Checkpoint** de la unidad. Es la manera de verificar que realmente tienes el nivel base que Rush necesita.

---

## Cuándo estás listo para elegir un track

Cuando puedas responder sin dudar todas las preguntas del Checkpoint de las 12 unidades. No antes.

Una vez que terminas el M0, ves el catálogo de tracks y elegís el que va con tu rol en Rush:

- **[Track Backend](../track-be/)** — NestJS, Drizzle, PostgreSQL, RLS, eventos
- **[Track Frontend](../track-fe/)** — React, TanStack Query, shadcn/ui, Playwright
- **[Track DevOps](../track-devops/)** — Docker, CI/CD, Grafana, Caddy, DigitalOcean
