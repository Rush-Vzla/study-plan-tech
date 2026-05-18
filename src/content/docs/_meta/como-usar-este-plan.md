---
title: Cómo usar este plan
description: Guía de uso del Plan B — flujo recomendado, cómo correr los labs, convenciones de código.
sidebar:
  order: 1
tags: [referencia, obligatorio]
track: meta
---

## ¿Qué es este sitio?

Este sitio es la documentación técnica del camino de aprendizaje de Rush. No es un tutorial de internet, no es un curso de Udemy. Es el contexto técnico real que usamos en el equipo.

Cada unidad cubre una pieza específica del stack de Rush. La idea es que cuando termines un track, puedas abrir el código del proyecto y entender qué está pasando — y saber por qué lo hicimos así.

## Flujo recomendado

1. **Módulo 0 primero** — sin excepciones. El M0 es obligatorio para todos.
2. **Elige tu track** — Backend, Frontend o DevOps según el rol que vayas a tener.
3. **Sigue el orden de sidebar.order** — las unidades dentro de cada track están ordenadas con dependencias en mente.
4. **No te saltees el Checkpoint** — es donde verificás que entendiste, no donde te evalúo a vos.

## Cómo correr los labs

Cada unidad tiene un lab guiado. Hay dos tipos:

**Labs inline** — el código está directamente en el archivo `.md`. Seguís los pasos, escribís el código en tu máquina, y verificás con el comando que dice la unidad.

**Labs multiarchivo** — la unidad te indica `Código del lab: examples/track-be/05-rls-policies`. En ese caso:

```bash
cd examples/track-be/05-rls-policies
pnpm install
pnpm test
```

Cada directorio de `examples/` tiene su propio `README.md` con instrucciones específicas.

## Convenciones de código

Cuando escribís código en los labs:

- **Identificadores en inglés** — variables, funciones, nombres de clase, nombres de archivo.
- **Comentarios en inglés** — dentro del código, siempre en inglés.
- **Versiones pinneadas** — si la unidad dice que uses una versión específica, usá esa. No la última.
- **TypeScript strict** — sin `any`, sin casteos, sin deshabilitar reglas del compiler.

El texto de las unidades está en español venezolano. El código adentro de los bloques de código está en inglés. Esa es la división.

## Qué esperar del code review

Cuando terminás un track, me avisás y hacemos un code review. No es un examen — es una conversación técnica. Voy a preguntarte por qué tomaste ciertas decisiones, qué cambiarías en retrospectiva, y dónde sentiste que algo no quedó claro.

El detalle completo está en [Code review process](/meta/code-review-process/).

## Herramientas que vas a necesitar

- Node 20.18.0+
- pnpm 11+
- Docker Desktop
- Una cuenta en GitHub con acceso al org Rush-Vzla

Si algo no está en tu máquina, la unidad correspondiente te lo va a decir.
