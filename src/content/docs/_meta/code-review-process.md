---
title: Code review process
description: Qué evalúa el founder, qué entregable produce el dev, y cómo funciona el feedback.
sidebar:
  order: 2
tags: [referencia]
track: meta
---

## Qué evalúa el founder

El code review al final de cada track no es sobre si el código compila. Es sobre si entendés lo que escribiste.

Lo que evalúo:

- **Comprensión de las decisiones** — ¿por qué usaste este approach y no otro?
- **Conocimiento de los tradeoffs** — ¿qué ventaja tiene Drizzle sobre Prisma en este contexto? ¿por qué RLS en Postgres y no en la aplicación?
- **Código limpio** — sin `any`, sin lógica suelta, sin funciones de 80 líneas.
- **Tests que prueban lo correcto** — no tests que solo verifican que el código existe.
- **Manejo de errores** — ¿qué pasa cuando algo falla? ¿el error tiene información útil?

## Qué entregable produce el dev

Antes del code review, abrís un PR en el repo del track (o en el repo de ejemplo que usaste para los labs). El PR debe incluir:

- El código de los labs completados.
- Los tests corriendo (`pnpm test` en verde).
- Un comentario explicando las 2 o 3 decisiones técnicas más importantes que tomaste.

No tiene que ser perfecto. La idea es que tengamos algo concreto de qué hablar.

## Formato de feedback

El feedback va en el PR como comentarios de revisión. Cada comentario tiene:

- **Por qué** — la razón técnica del feedback, no solo "esto está mal".
- **Qué cambiarías** — una sugerencia concreta, no un mandato.
- **Prioridad** — `blocking` (hay que cambiar antes de avanzar) o `non-blocking` (mejora para el futuro).

Los comentarios `non-blocking` son sugerencias, no bloqueos. Podés avanzar al siguiente track y revisarlos después.

## Cronograma

No hay un cronograma fijo. Cada dev avanza a su ritmo. Cuando termines un track y te sientas listo para el review, me escribís y coordinamos.

Lo único que pido es que no pidas el review sin haber pasado los Checkpoints de cada unidad. Si el Checkpoint dice que deben pasar N tests y no pasan, no estás listo para el review todavía.
