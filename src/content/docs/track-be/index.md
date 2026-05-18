---
title: Track Backend — NestJS + PostgreSQL + Rush patterns
description: 23 unidades para construir el backend de Rush con NestJS, Drizzle ORM, RLS, autenticación y observabilidad.
sidebar:
  order: 0
track: track-be
unit_type: indice
tags: [obligatorio, track-be]
estimated_hours: 40
prerequisites:
  - modulo-0/ts-estricto
  - modulo-0/sql-real
  - modulo-0/clean-arch-pragmatica
learning_outcomes:
  - Construir APIs NestJS con DI, guards, pipes y exception filters
  - Implementar Row-Level Security con Drizzle ORM y PostgreSQL 17
  - Diseñar sistemas append-only con compensating events
  - Autenticar usuarios multi-tenant con Better Auth
  - Operar Redis, BullMQ y audit logs inmutables
last_updated: "2026-05-18"
---

> **¿Qué cubre este track?** Los patrones técnicos que sostienen el backend de Rush: NestJS modular, Drizzle ORM, RLS para aislamiento de tenants, append-only events, doble moneda, autenticación y observabilidad.
>
> **Prerequisito obligatorio**: completar el Módulo 0 antes de empezar acá.
>
> **Horas estimadas**: ~80 horas de lab + ~60 horas de lectura ≈ 130-180 horas en total.

## ¿Qué vas a aprender?

Rush es un Business OS multi-tenant. Eso significa que el backend tiene que garantizar que los datos de cada negocio estén completamente aislados — no solo por filtros en el código, sino a nivel de base de datos. Y tiene que manejar montos en VES y USD sin hardcodear ninguna tasa.

Este track te enseña cómo funciona ese backend, unidad por unidad.

## Orden recomendado

| Orden | Unidad | Horas |
|-------|--------|-------|
| 1 | [NestJS: módulos, decorators y DI](./nestjs-fundamentos/) | ~4 hs |
| 2 | [Guards, pipes e interceptors](./nestjs-guards-pipes/) | ~3 hs |
| 3 | [Manejo de errores con estilo](./nestjs-exception-filters/) | ~2 hs |
| 4 | [Drizzle ORM: SQL-first de verdad](./drizzle-fundamentos/) | ~4 hs |
| 5 | [RLS: PostgreSQL como barrera de aislamiento](./rls-multi-tenant/) | ~5 hs |
| 6 | [Testear RLS con Postgres real](./testcontainers-rls/) | ~4 hs |
| 7 | [Append-only: el historial que no miente](./append-only-eventos/) | ~4 hs |
| 8 | [Compensating events: deshacer sin borrar](./compensating-events/) | ~3 hs |
| 9 | [Idempotencia: operaciones que no se duplican](./idempotencia/) | ~3 hs |
| 10 | [Doble moneda: VES + USD en Rush](./doble-moneda/) | ~3 hs |
| 11 | [Better Auth: auth multi-tenant sin cookieCache](./better-auth-multitenant/) | ~5 hs |
| 12 | [Step-up auth: segundo factor para operaciones críticas](./step-up-auth/) | ~2 hs |
| 13 | [Redis + BullMQ: jobs en background](./redis-bullmq/) | ~4 hs |
| 14 | [Audit log inmutable con hash chain](./audit-log-hash-chain/) | ~3 hs |
| 15 | [Migrations sin down-migrations](./expand-contract-migrations/) | ~2 hs |
| 16 | [Módulos como capacidades del Business OS](./clean-arch-modulos/) | ~3 hs |
| 17 | [Boundaries contract-only: billing, coach, fiscal](./boundaries-contract-only/) | ~2 hs |
| 18 | [DDD sin overengineering](./ddd-ligero/) | ~3 hs |
| 19 | [KPI snapshots: escalar el cálculo de métricas](./kpi-snapshots/) | ~3 hs |
| 20 | [Rate limiting jerárquico](./rate-limiting/) | ~2 hs |
| 21 | [Validación Zod en dos capas](./zod-validation-layers/) | ~2 hs |
| 22 | [Pino: logs estructurados que no filtran datos](./pino-logs/) | ~2 hs |
| 23 | [Consumir `@rush/shared-schemas` en el backend](./shared-schemas-consumo/) | ~2 hs |

## Antes de empezar

Verifica que tienes estas herramientas instaladas localmente:

- Node 24 LTS
- pnpm 11+
- Docker + Docker Compose (para Testcontainers)
- PostgreSQL 17 (o usar el contenedor de cada lab)

Si algo falla en el setup, el error más común es una versión de Node incompatible. Revisa con `node --version`.
