---
title: 'Track DevOps'
description: 'Aprende a desplegar, operar y monitorear el stack de Rush sobre un Droplet de DigitalOcean.'
unit_type: indice
track: 'track-devops'
estimated_hours: 42
sidebar:
  order: 0
tags: ['obligatorio', 'track-devops']
last_updated: '2026-05-18'
---

Este track te enseña cómo funciona el stack de operaciones de Rush en producción: desde construir imágenes Docker seguras hasta monitorear logs en Grafana, pasando por CI/CD con GitHub Actions y gestión de secretos con Infisical.

No necesitas experiencia previa en DevOps, pero sí necesitas haber completado el Módulo 0, en especial las unidades de Docker básico, Git workflow y observabilidad conceptual.

## Prerequisitos

Antes de empezar este track, asegúrate de tener claro:

- Docker y docker-compose básicos (`modulo-0/docker-basico`)
- Git workflow y conventional commits (`modulo-0/git-workflow`)
- Concepto de observabilidad — logs, métricas, trazas (`modulo-0/observabilidad-concepto`)

## Qué cubre este track

Rush corre sobre un Droplet único de DigitalOcean. No hay Kubernetes, no hay múltiples zonas, no hay auto-scaling complejo. Lo que hay es un stack bien construido que prioriza la operabilidad y la recuperación rápida.

Esto es lo que vas a aprender:

| #   | Unidad                                                                      | Horas |
| --- | --------------------------------------------------------------------------- | ----- |
| 1   | [Docker multi-stage con imagen distroless](./docker-multistage-distroless/) | 4h    |
| 2   | [docker-compose en el Droplet](./docker-compose-droplet/)                   | 3h    |
| 3   | [Caddy como reverse proxy](./caddy-reverse-proxy/)                          | 3h    |
| 4   | [Cloudflare: DNS, CDN y WAF](./cloudflare-setup/)                           | 2h    |
| 5   | [Infisical para secretos en runtime](./infisical-secrets/)                  | 3h    |
| 6   | [Pipeline de GitHub Actions](./github-actions-pipeline/)                    | 5h    |
| 7   | [Trivy: escaneo de contenedores en CI](./trivy-container-scan/)             | 2h    |
| 8   | [GitHub Container Registry](./ghcr-registry/)                               | 2h    |
| 9   | [Grafana + Loki + Prometheus](./grafana-loki-prometheus/)                   | 5h    |
| 10  | [OpenTelemetry y tracing](./opentelemetry-tracing/)                         | 3h    |
| 11  | [Expand-contract en deploys](./expand-contract-deploy/)                     | 2h    |
| 12  | [Pre-commit hooks con gitleaks](./pre-commit-hooks/)                        | 2h    |
| 13  | [Changesets y shared-schemas](./changesets-shared-schemas/)                 | 3h    |
| 14  | [Deploy al Droplet con rollback en 1 minuto](./droplet-single-node-deploy/) | 4h    |

**Total estimado**: 43 horas de estudio y lab guiado.

## Orden recomendado

El orden de la tabla es el que tiene más sentido porque cada unidad construye sobre la anterior:

1. Primero entiende cómo se construye la imagen (Docker multi-stage).
2. Luego cómo se orquesta localmente y en el servidor (docker-compose).
3. Después cómo se expone al exterior con HTTPS automático (Caddy + Cloudflare).
4. Luego cómo se manejan los secretos sin commitearlos (Infisical).
5. Después el pipeline que automatiza todo eso (GitHub Actions + Trivy + ghcr.io).
6. Luego cómo se observa lo que está corriendo (Grafana stack + OpenTelemetry).
7. Finalmente los patrones que mantienen el sistema estable a largo plazo (expand-contract, hooks, Changesets, deploy con rollback).

## Lo que NO cubre este track

Este track enseña el stack real de Rush. No cubre:

- Kubernetes ni orquestadores multi-nodo (ver extras del track).
- Terraform o IaC complejo (ver extras).
- Multi-región o alta disponibilidad — Rush prioriza simplicidad operacional sobre resiliencia multi-zona.
- Configuraciones de producción reales: IPs, dominios, credenciales. Los ejemplos son ilustrativos.

## Próxima unidad → [Docker multi-stage con imagen distroless](../docker-multistage-distroless/)
