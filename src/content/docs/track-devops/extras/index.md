---
title: "Track DevOps — Más allá de Rush"
description: "Tres unidades opcionales para ir más allá del stack que Rush usa hoy: Kubernetes, Terraform e GitHub Actions avanzado."
sidebar:
  order: 999
  badge:
    text: 'extra'
    variant: caution
unit_type: indice
track: 'track-devops'
estimated_hours: 10
prerequisites: ['track-devops/droplet-single-node-deploy']
learning_outcomes:
  - "Conocer las herramientas de infraestructura más allá del stack actual de Rush"
  - "Saber cuándo tiene sentido adoptarlas y cuándo no"
tags: ['extra', 'track-devops']
last_updated: '2026-05-18'
stack_versions: {}
lab_runnable: false
extra: true
---

## ¿Qué son estas unidades?

Fíjate que el Track DevOps core te enseña exactamente lo que Rush usa en producción hoy: Docker, Caddy, Cloudflare, GitHub Actions, Grafana, y el Droplet single-node. Con eso tienes suficiente para contribuir, hacer deploys, y mantener el stack.

Estas tres unidades van más allá de eso. Cubren herramientas que Rush **no usa actualmente**, pero que vas a encontrar en otras empresas o que pueden tener sentido si Rush escala de una manera que hoy no existe.

No las necesitas para empezar a contribuir. No son obligatorias para el code review del founder. Son para cuando termines el core y quieras ampliar tu visión de infraestructura.

---

## ¿Cuándo cursarlas?

Cuando hayas terminado las 14 unidades del Track DevOps core y entiendas cómo funciona el Droplet single-node de Rush. Si todavía no llegaste a `github-actions-pipeline` o `droplet-single-node-deploy`, vuelve después.

---

## Qué cubre cada unidad

| Unidad | Tema | Horas |
| ------ | ---- | ----- |
| [Kubernetes: cuándo el Droplet no alcanza](./kubernetes-intro/) | Pods, Services, Deployments. Rush no lo usa — por qué. | ~4 hs |
| [Terraform: infraestructura como código](./terraform-iac/) | Recursos DigitalOcean con Terraform. Cuándo conviene vs. scripts. | ~3 hs |
| [GitHub Actions avanzado](./github-actions-avanzado/) | Matrix strategy, cache de dependencias, reusable workflows. | ~3 hs |

---

## Lo que **no** cubre esto

Estas unidades no explican cómo funciona el negocio de Rush, no incluyen IPs ni dominios reales, y no reemplazan la documentación oficial de Kubernetes, Terraform ni GitHub Actions. Son una introducción orientada a que entiendas los conceptos y sepas cuándo vale la pena usarlos.
