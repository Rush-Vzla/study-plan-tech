---
title: 'Track Frontend'
description: 'React 19, Vite, React Router, TanStack Query, shadcn/ui y pruebas. 19 unidades obligatorias para construir el frontend de Rush.'
unit_type: indice
track: 'track-fe'
estimated_hours: 52
tags: ['obligatorio', 'track-fe']
last_updated: '2026-05-18'
sidebar:
  order: 0
---

Este track cubre todo lo que necesitas para trabajar en el frontend de Rush.
El punto de partida es que ya completaste el Módulo 0 — si no lo hiciste, empieza ahí.

## Qué cubre este track

- Scaffolding con Vite y configuración TypeScript strict
- Enrutamiento con React Router (y por qué no TanStack Router)
- Organización feature-first del código
- Data fetching con TanStack Query — incluyendo query keys tenant-aware
- Tablas y virtualización con TanStack Table y TanStack Virtual
- Componentes UI con shadcn/ui y Tailwind v4
- Formularios tipados con React Hook Form + Zod
- Consumo del package `@rush/shared-schemas` desde el frontend
- Internacionalización en es-VE, es-AR, en y pt-BR
- Auth en el cliente: JWT, refresh token y limpieza de cache al logout
- Patrón container-presentational
- Error Boundaries y Suspense
- Testing con Vitest + Testing Library y Playwright E2E
- Performance básica: code splitting, lazy loading, memoización
- Seguridad cliente: CSP y CORS

## Prerequisitos

Antes de empezar este track necesitas tener dominadas las unidades del Módulo 0:

- [TypeScript sin trampa](/modulo-0/ts-estricto/)
- [Zod: validación que no miente](/modulo-0/zod-schemas/)
- [Clean Architecture sin ceremonias](/modulo-0/clean-arch-pragmatica/)
- [Testar es diseñar, no verificar](/modulo-0/testing-filosofia/)

## Orden recomendado de las 19 unidades

| #   | Unidad                                            | Horas | Archivo                                                     |
| --- | ------------------------------------------------- | ----- | ----------------------------------------------------------- |
| 1   | React + Vite: el proyecto arranca                 | ~2 hs | [react-vite-setup](react-vite-setup/)                       |
| 2   | React Router: navegación sin CVEs de supply chain | ~3 hs | [react-router](react-router/)                               |
| 3   | Feature-first: carpetas que gritan el dominio     | ~3 hs | [feature-first](feature-first/)                             |
| 4   | TanStack Query: data fetching sin dolor           | ~4 hs | [tanstack-query-fundamentos](tanstack-query-fundamentos/)   |
| 5   | Tenant-aware query keys: el cache que no miente   | ~3 hs | [tanstack-query-tenant-aware](tanstack-query-tenant-aware/) |
| 6   | TanStack Table: tablas tipadas y potentes         | ~3 hs | [tanstack-table](tanstack-table/)                           |
| 7   | TanStack Virtual: listas largas sin lag           | ~2 hs | [tanstack-virtual](tanstack-virtual/)                       |
| 8   | shadcn/ui: componentes que son tuyos              | ~3 hs | [shadcn-ui](shadcn-ui/)                                     |
| 9   | Tailwind: styling sin CSS-in-JS                   | ~2 hs | [tailwind-styling](tailwind-styling/)                       |
| 10  | React Hook Form + Zod: formularios tipados        | ~3 hs | [react-hook-form-zod](react-hook-form-zod/)                 |
| 11  | `@rush/shared-schemas` en el frontend             | ~2 hs | [shared-schemas-fe](shared-schemas-fe/)                     |
| 12  | Internacionalización es-VE/es-AR/en/pt-BR         | ~2 hs | [i18n-rush](i18n-rush/)                                     |
| 13  | Auth en el frontend: tokens y tenant              | ~3 hs | [auth-frontend](auth-frontend/)                             |
| 14  | Container vs presentational: separar lógica de UI | ~2 hs | [container-presentational](container-presentational/)       |
| 15  | Error Boundaries: la UI que no rompe todo         | ~2 hs | [error-boundaries](error-boundaries/)                       |
| 16  | Vitest + Testing Library para frontend            | ~3 hs | [vitest-react](vitest-react/)                               |
| 17  | Playwright: E2E de flujos monetarios              | ~3 hs | [playwright-e2e](playwright-e2e/)                           |
| 18  | Performance frontend sin obsesionarse             | ~2 hs | [performance-fe](performance-fe/)                           |
| 19  | CSP y CORS desde el frontend                      | ~2 hs | [csp-cors-frontend](csp-cors-frontend/)                     |

**Total estimado**: ~52 horas de estudio activo (lab + lectura).

## Qué NO cubre este track

Este track cubre lo que Rush usa hoy en producción.
Lo que está fuera del alcance deliberadamente:

- Patrones avanzados de React (compound components, render props) → están en los extras
- TanStack Query avanzado (optimistic updates, offline) → extras
- Micro-frontends con Module Federation → extras
- Accesibilidad avanzada (ARIA audit completo) → extras

Si terminas las 19 unidades core y quieres más, los extras están en [Track Frontend — Extras](/track-fe/extras/).
