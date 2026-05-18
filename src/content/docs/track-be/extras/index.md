---
title: "Track Backend — Más allá de Rush"
description: Cinco unidades opcionales para profundizar en patrones avanzados que van más allá del stack actual de Rush.
sidebar:
  order: 999
  badge:
    text: 'extra'
    variant: caution
track: 'track-be'
unit_type: indice
tags: [extra, track-be]
estimated_hours: 16
extra: true
last_updated: '2026-05-18'
---

Estas unidades son opcionales. No necesitas cursarlas para empezar a contribuir en Rush — el track core de 23 unidades cubre todo lo que necesitas.

Lo que encontrarás acá son patrones avanzados: algunos los usa Rush parcialmente, otros los verás más adelante cuando el producto crezca, y otros te dan el contexto para entender por qué Rush tomó las decisiones que tomó.

## ¿Cuándo cursarlas?

Cuando ya terminaste el track core de Backend y quieres ir más fondo. No hay un orden obligatorio entre estas unidades, pero sí hay una lógica:

1. Empieza con **NestJS avanzado** o **Drizzle avanzado** si quieres dominar mejor las herramientas que ya usas en Rush.
2. Sigue con **PostgreSQL avanzado** si quieres entender qué pasa dentro de la base de datos cuando tus queries corren.
3. Cierra con **Event Sourcing completo** y **CQRS** si quieres entender los patrones de arquitectura que Rush tiene en su radar pero todavía no implementa.

## Unidades

| Unidad | Horas | Qué cubre |
| --- | --- | --- |
| [NestJS avanzado](nestjs-avanzado/) | ~3h | OnModuleInit, forRoot/forRootAsync, custom providers con factory |
| [Drizzle avanzado](drizzle-avanzado/) | ~3h | WITH CTEs, window functions, batch queries, subqueries |
| [PostgreSQL avanzado](postgresql-avanzado/) | ~3h | JSONB queries, GIN indexes, pg_stat_statements, VACUUM ANALYZE |
| [Event Sourcing completo](event-sourcing-completo/) | ~4h | Proyecciones, snapshots de aggregate, cuándo sí usar ES completo |
| [CQRS pattern](cqrs-pattern/) | ~3h | Command/Query separation, read models separados, cuándo aplica |

Total estimado: ~16 horas.

## Lo que NO vas a encontrar acá

Estas unidades no incluyen lógica de negocio específica de Rush como fórmulas de KPIs, umbrales de semáforo, cálculos de IVA/IGTF, ni flujos de onboarding de encargado/empleado. Eso vive en la documentación interna del producto, no acá.
