---
title: "Track Frontend — Más allá de Rush"
description: Cuatro unidades opcionales para profundizar en patrones avanzados de React y arquitectura frontend que van más allá del stack actual de Rush.
sidebar:
  order: 999
  badge:
    text: 'extra'
    variant: caution
track: 'track-fe'
unit_type: indice
tags: [extra, track-fe]
estimated_hours: 12
extra: true
last_updated: '2026-05-18'
---

Estas unidades son opcionales. No necesitas cursarlas para empezar a contribuir en Rush — el track core de 19 unidades cubre todo lo que necesitas.

Lo que encontrarás acá son patrones y conceptos que van más allá del uso diario: algunos te van a ayudar a entender por qué Rush tomó ciertas decisiones de arquitectura, otros te preparan para escenarios que Rush todavía no enfrenta pero que aparecen en proyectos más grandes.

## ¿Cuándo cursarlas?

Cuando ya terminaste el track core de Frontend y quieres ir más a fondo. No hay un orden obligatorio entre estas unidades, pero hay una lógica natural:

1. Empieza con **Patrones avanzados de React** si quieres entender las técnicas de composición que aparecen en librerías que Rush usa como shadcn/ui.
2. Sigue con **TanStack Query avanzado** para dominar los patrones de optimistic UI y manejo offline que van más allá del CRUD básico.
3. Termina con **Accesibilidad** si quieres asegurar que Rush funcione bien para todos los usuarios desde el principio.
4. Revisa **Micro-frontends** para entender por qué Rush no los usa y cuándo tendría sentido considerar ese camino.

## Unidades

| Unidad | Horas | Qué cubre |
| --- | --- | --- |
| [Patrones avanzados de React](react-advanced-patterns/) | ~3h | Compound components, render props, context composition |
| [TanStack Query avanzado](tanstack-query-advanced/) | ~3h | Optimistic updates, placeholderData, offline strategies |
| [Micro-frontends: cuándo tiene sentido](micro-frontends-intro/) | ~3h | Module Federation, cuándo escala, por qué Rush no los usa |
| [Accesibilidad](accesibilidad-a11y/) | ~3h | ARIA roles, keyboard nav, color contrast, shadcn/ui bien usado |

Total estimado: ~12 horas.

## Lo que NO vas a encontrar acá

Estas unidades no incluyen lógica de negocio específica de Rush como fórmulas de KPIs, cálculos de IVA/IGTF, ni flujos de onboarding de encargado/empleado. Eso vive en la documentación interna del producto, no acá.
