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

## Compensating event (evento compensador)

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

---

## 4-tupla (doble moneda)

Los 4 campos que Rush guarda por cada monto: `amount`, `currency`, `usd_equivalent`, `exchange_rate_snapshot`. Juntos garantizan que el historial financiero sea reproducible aunque la tasa del día siguiente sea diferente.

---

## Distroless

Una imagen Docker que no tiene shell, package manager, ni utilidades del sistema operativo — solo el runtime necesario para correr el proceso. Es más segura porque no hay superficie de ataque si alguien logra entrar al contenedor.

Rush usa imágenes distroless de Google para el backend en producción.

---

## Multi-stage build

Una técnica de Docker donde el Dockerfile tiene varias etapas: una para compilar (con todas las herramientas de dev) y otra para producción (solo el resultado compilado). La imagen final queda chica y limpia.

---

## Pino

La librería de logging que usa Rush. Es la más rápida para Node.js porque escribe logs como JSON línea por línea, sin bloquear el event loop. Se integra con Loki y OpenTelemetry para correlacionar logs con trazas.

---

## Loki

Un sistema de almacenamiento y consulta de logs creado por Grafana Labs. No indexa el contenido completo de los logs (por eso es barato de operar), solo los labels. Se consulta desde Grafana.

---

## Prometheus

Un sistema de métricas de series de tiempo. Cada servicio expone un endpoint `/metrics` y Prometheus lo "raspa" periódicamente para almacenar los valores. Se consulta con PromQL desde Grafana.

---

## Grafana

La herramienta de visualización que agrupa dashboards de métricas (Prometheus), logs (Loki) y trazas (Tempo u OpenTelemetry). En Rush es la primera pantalla que abrís cuando algo falla en producción.

---

## OpenTelemetry

Un estándar abierto para instrumentar código y exportar trazas, métricas y logs. "Instrumentar" significa agregar código que registra cuánto tarda cada operación y qué ocurrió.

---

## Span

La unidad mínima de una traza en OpenTelemetry. Representa una operación específica — una query SQL, un llamado HTTP, una función — con su duración y sus atributos.

---

## Trace (traza distribuida)

Una colección de spans que representan el camino completo de un request a través del sistema. Te permite ver dónde se fue el tiempo: ¿fue la query? ¿fue la llamada a la API externa? ¿fue el serialize?

---

## Infisical

El gestor de secretos que usa Rush. En vez de guardar variables de entorno en archivos `.env` que viajan en el repo o en el CI, Infisical los almacena centralizadamente y los inyecta en runtime al proceso que los necesita.

---

## Trivy

Un escáner de seguridad open source que analiza imágenes Docker, repositorios de código y archivos de configuración buscando vulnerabilidades conocidas (CVEs). En Rush corre automáticamente en el pipeline de CI.

---

## ghcr.io — GitHub Container Registry

El registro de imágenes Docker de GitHub. En vez de Docker Hub, Rush sube las imágenes compiladas a `ghcr.io/rush-vzla/...` como parte del pipeline de CI. El Droplet las descarga desde ahí en el deploy.

---

## Caddy

Un servidor web y reverse proxy moderno que maneja HTTPS automáticamente vía Let's Encrypt. Rush lo usa como punto de entrada al Droplet — recibe el tráfico de internet y lo redirige al backend y al frontend según el dominio.

---

## Cloudflare

El servicio de DNS, CDN y WAF (firewall) que protege y acelera el sitio. En Rush, todo el tráfico pasa por Cloudflare antes de llegar al servidor — eso da protección DDoS, caché en el borde, y headers de seguridad.

---

## OTP — One-Time Password

Una contraseña de un solo uso, válida por un tiempo limitado. En Rush se usa para step-up auth: antes de una operación crítica (como mover plata), le pedís al usuario que confirme con un código enviado a su email o teléfono.

---

## Step-up auth

Un segundo factor de autenticación que se solicita solo para operaciones sensibles, no para todo el sistema. El usuario ya está logueado, pero para hacer algo crítico (eliminar datos, cambiar cuenta bancaria) tiene que confirmar su identidad otra vez.

---

## RHF — React Hook Form

La librería de manejo de formularios que usa Rush en el frontend. Está basada en refs en vez de state, por eso no re-renderiza el componente en cada keystroke. Se integra con Zod para validación tipada.

---

## zodResolver

El adaptador que conecta React Hook Form con Zod. Le pasás un schema Zod al formulario y RHF valida automáticamente todos los campos contra ese schema al submit (y opcionalmente en cada cambio).

---

## TanStack Query (React Query)

La librería de data fetching y cache del servidor que usa Rush en el frontend. Maneja loading states, error states, re-fetching automático, y cache invalidation. Evita tener que manejar esos estados manualmente.

---

## queryKey

La clave que identifica una query en el cache de TanStack Query. Si dos componentes usan el mismo `queryKey`, comparten los datos en cache y solo se hace un fetch. En Rush las queryKeys incluyen el `businessId` para que el cache sea tenant-aware.

---

## staleTime

Cuánto tiempo considera TanStack Query que los datos en cache están "frescos". Mientras no pasen esos milisegundos, no va a refetchear aunque el componente se remonte. Si es `Infinity`, nunca refetchea solo.

---

## TenantProvider

Un componente React de Rush que inyecta el contexto del tenant actual en toda la aplicación via Context API. Cualquier componente puede llamar `useTenant()` para obtener el `businessId` sin tener que pasarlo por props.

---

## shadcn/ui

Una colección de componentes de UI construidos sobre Radix UI y estilados con Tailwind. Lo particular es que no es una librería que instalás como dependencia — copiás los componentes directamente en tu proyecto y los modificás como querés.

---

## Tailwind CSS

Un framework de CSS "utility-first" donde en vez de escribir clases semánticas (`btn-primary`), aplicás directamente las propiedades CSS como clases (`bg-blue-500 text-white px-4 py-2`). Rush usa Tailwind v4 via el plugin de Vite.

---

## Astro

El framework con el que está construido este plan de estudio. Genera HTML estático en build time (con islands de JavaScript interactivo donde se necesita). Para contenido mayormente estático es más rápido que React o Next.js.

---

## Starlight

El tema de documentación para Astro que usa este plan. Da sidebar automático, búsqueda, paginación, tabla de contenidos, y soporte i18n out of the box.

---

## MDX

Una extensión de Markdown que permite usar componentes de React (o Astro) dentro del contenido. Las unidades de este plan son `.mdx` — son Markdown con componentes como `<Aside>` y `<Steps>` para formateo rico.

---

## Vitest

El framework de tests unitarios que usa Rush. Es compatible con la API de Jest pero está integrado con Vite, por eso es mucho más rápido en el setup inicial. Se usa para tests del backend y del frontend.

---

## Playwright

Un framework de tests end-to-end (E2E) que controla un browser real (Chromium, Firefox, WebKit) vía código. En Rush se usa para testear flujos completos como login, creación de venta, y cierre de caja.

---

## ARIA — Accessible Rich Internet Applications

Un conjunto de atributos HTML que comunican semántica adicional a lectores de pantalla y otras tecnologías asistivas. Por ejemplo, `aria-label`, `aria-expanded`, `role="dialog"`. Es la base de la accesibilidad web.

---

## CSP — Content Security Policy

Un header HTTP que le dice al browser qué recursos puede cargar y ejecutar. Si un atacante inyecta un script malicioso, CSP lo bloquea antes de que corra. En Rush el backend envía este header en todas las respuestas.

---

## CORS — Cross-Origin Resource Sharing

El mecanismo que controla qué dominios pueden hacer requests al API. Si el frontend en `app.rush.io` hace un fetch al backend en `api.rush.io`, el backend tiene que incluir headers CORS para que el browser lo permita.

---

## Micro-frontends

Una arquitectura donde múltiples aplicaciones frontend independientes se componen en una sola interfaz. Útil cuando hay equipos distintos trabajando en partes distintas del producto. Rush no lo usa hoy, pero está en los extras para que entiendas cuándo tiene sentido.

---

## kind — Kubernetes in Docker

Una herramienta que levanta un cluster de Kubernetes local usando contenedores Docker como nodos. En el extra de Kubernetes del track DevOps lo usamos para practicar sin necesitar un cluster real en la nube.

---

## Terraform

Una herramienta de Infrastructure as Code (IaC) de HashiCorp. Declarás en archivos `.tf` qué recursos de nube querés (servidores, DNS, bases de datos) y Terraform calcula qué crear, modificar o destruir para llegar a ese estado.

---

## plan/apply (Terraform)

El flujo de trabajo de Terraform: `terraform plan` te muestra qué cambiaría sin hacer nada todavía; `terraform apply` ejecuta los cambios. En Rush el plan se corre en CI como revisión de PRs de infraestructura; el apply es manual y controlado.

---

## Expand-contract

Una estrategia de migrations para cambiar el esquema de base de datos sin downtime. Primero "expandís" (agregás la columna nueva sin borrar la vieja), deploeás el código que soporta ambas, luego "contraés" (removés la vieja). Nunca hay un momento en que el código nuevo y el esquema viejo son incompatibles.
