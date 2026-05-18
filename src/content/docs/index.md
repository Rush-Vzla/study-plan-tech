---
title: Bienvenido al Plan B — Rush
description: El plan de estudio técnico para los devs que se suman al equipo Rush. Fundaciones + 3 tracks paralelos.
sidebar:
  order: 0
tags: [obligatorio, referencia]
track: meta
---

Este es el plan de estudio técnico de Rush. Si llegaste acá es porque te vas a sumar al equipo y necesitas agarrar el contexto técnico que usamos día a día.

No es un curso genérico. Todo lo que ves acá está diseñado alrededor del stack real de Rush, los problemas reales que resolvemos, y las decisiones que tomamos con razones concretas.

## ¿Qué es el Plan B?

El Plan B es el camino técnico que sigue cada dev antes de tocar código de producción de Rush. Tiene:

- **Módulo 0** — fundaciones obligatorias que todos hacen, sin importar el track
- **Track Backend** — el stack del API de Rush (NestJS, Drizzle, Postgres, BullMQ)
- **Track Frontend** — el stack del cliente Rush (React, TanStack, shadcn/ui)
- **Track DevOps** — el stack de infra de Rush (Docker, Caddy, GitHub Actions, Grafana)

Cada track cubre desde lo básico hasta lo avanzado. Al final de cada track hay unidades **opcionales** ("Más allá de Rush") — son extra, para quien quiera profundizar más allá de lo que Rush usa hoy.

## ¿Cómo está organizado?

| Sección                | Horas estimadas | Para quién               |
| ---------------------- | --------------- | ------------------------ |
| Módulo 0 — Fundaciones | ~40 hs          | Todos                    |
| Track Backend          | ~130-180 hs     | Devs backend             |
| Track Frontend         | ~95-140 hs      | Devs frontend            |
| Track DevOps           | ~75-100 hs      | Devs devops / full-stack |

Cada unidad tiene 3 secciones:

1. **Conceptos** — lectura de 10-15 minutos. Te explico por qué existe esto y cómo encaja en Rush.
2. **Lab guiado** — 45-60 minutos de práctica. Seguís pasos, escribís código, verificás que funciona.
3. **Checkpoint** — preguntas conceptuales y una lista de tests que deben pasar antes de avanzar.

## ¿Cómo elijo mi track?

Si vas a trabajar principalmente en el API (NestJS, Drizzle, Postgres) → **Track Backend**.

Si vas a trabajar principalmente en el cliente (React, TanStack, Tailwind) → **Track Frontend**.

Si vas a trabajar en infra, CI/CD o deployments (Docker, GitHub Actions, Grafana) → **Track DevOps**.

Si todavía no está definido, hacé el Módulo 0 y decidí después. Podés hacer más de un track — no hay restricción.

## ¿Cómo se evalúa?

Cada track termina con un code review humano del founder (Eliab). El detalle de qué evalúa y qué espera está en la página [Code review process](/meta/code-review-process/).

No hay un cronograma fijo. Cada dev avanza a su ritmo. Lo único que importa es que los labs funcionen y el code review sea una conversación técnica real.

## ¿Por dónde empiezo?

→ [Cómo usar este plan](/meta/como-usar-este-plan/)
