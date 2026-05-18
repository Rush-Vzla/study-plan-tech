---
title: Glosario
description: Términos técnicos usados en el Plan B — en venezolano, como si fuera fácil.
sidebar:
  order: 3
tags: [referencia, glosario]
track: meta
---

Términos canónicos del Plan B. Si encontrás uno de estos en una unidad y no te suena del todo, buscalo acá. El objetivo es que entiendas qué significa en el contexto de Rush, no que lo memorices.

---

## RLS — Row Level Security

Fíjate que Postgres te permite definir reglas directamente en la base de datos que dicen "este usuario solo puede ver estas filas". No en el código de la aplicación, en la base de datos misma. Eso es RLS.

En Rush lo usamos para que el tenant A nunca vea datos del tenant B, ni aunque alguien en el código se olvide de filtrar por `business_id`. La política de Postgres lo bloquea antes.

---

## Multi-tenant

Imagínate que un mismo sistema atiende a 50 negocios distintos al mismo tiempo. Cada uno tiene sus datos, sus usuarios, su configuración — y ninguno puede ver los del otro. Eso es multi-tenant.

En Rush, cada negocio que usa la plataforma es un "tenant". Todo lo que guardamos está separado por `business_id`.

---

## Idempotencia

Una operación es idempotente cuando hacerla una vez o hacerla diez veces produce el mismo resultado. Si el cliente manda el mismo pago dos veces por error de red, el sistema solo cobra una vez.

En Rush lo implementamos con una tabla `idempotency_keys` y un header `Idempotency-Key` en las requests críticas.

---

## Append-only

Un sistema append-only solo agrega registros, nunca los modifica ni los borra. Si algo cambia, se agrega un nuevo registro con el cambio — el historial anterior queda intacto.

En Rush usamos tablas de eventos (como `sales_events`) que son append-only. Si una venta se anula, agregamos un evento de compensación, no borramos la venta original.

---

## Audit log

Un registro inmutable de todo lo que pasó en el sistema — quién hizo qué, cuándo, y sobre qué entidad. En Rush lo implementamos con hash chain (cada entrada referencia el hash de la anterior) para detectar modificaciones.

---

## Hash chain

Una cadena donde cada entrada incluye el hash de la entrada anterior. Si alguien modifica una entrada en el medio, el hash cambia y toda la cadena siguiente invalida. Es lo que hace que el audit log sea confiable.

---

## Compensating event

Un evento que "deshace" otro evento anterior. En vez de borrar o modificar el evento original, agregás uno nuevo que lo revierte.

Ejemplo: si se registró una venta incorrecta, agregás un `sales_cancellation_event` con `reverses_event_id` apuntando al evento original. El total neto se calcula sumando ambos.

---

## Doble moneda

En Venezuela los precios existen en dos monedas simultáneamente: bolívares (VES) y dólares (USD). Rush guarda los montos con 4 valores: el monto original, la moneda, el equivalente en USD, y la tasa de referencia usada en ese momento.

---

## Monolito modular

Una aplicación que corre como un solo proceso pero que está internamente organizada en módulos bien delimitados. No es un "big ball of mud" — cada módulo tiene su frontera clara y no depende de los internals de los otros.

Rush usa un monolito modular con NestJS. Es más simple que microservicios para el tamaño actual del equipo.

---

## Vertical slices

Organizar el código por capacidades del negocio, no por tipo técnico. En vez de tener carpetas `controllers/`, `services/`, `repositories/`, tenés carpetas `sales/`, `onboarding/`, `health-score/` — cada una con todos sus layers adentro.

---

## Clean architecture

Un conjunto de principios de diseño donde las dependencias siempre apuntan hacia adentro. El dominio (lógica de negocio pura) no sabe nada de la base de datos, del HTTP, ni de ningún framework. La infraestructura sabe del dominio, no al revés.

---

## Testcontainers

Una librería que levanta contenedores Docker reales durante los tests. En vez de mockear la base de datos, levantás un Postgres real, corrés tus tests contra él, y lo tirás al terminar.

En Rush es obligatorio para los tests de RLS — los mocks no pueden verificar políticas de Postgres.

---

## BullMQ

Una librería de colas de jobs para Node.js que usa Redis como backend. Se usa para procesar trabajo en segundo plano — enviar emails, calcular KPIs, hacer requests a APIs externas — sin bloquear el request HTTP principal.

---

## Better Auth

La librería de autenticación que usa Rush. Es open source, auto-hosteable, y tiene soporte para multi-tenant. Maneja sesiones, tokens, invitaciones, y flujos de recovery.

---

## Drizzle

Un ORM para TypeScript que es "SQL-first" — en vez de esconder el SQL, te deja escribir queries tipadas que se parecen mucho al SQL real. Rush lo usa porque el tipado es preciso y el rendimiento es predecible.
