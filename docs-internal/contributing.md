# Cómo contribuir al Plan B

Guía para agregar o modificar unidades en el docs site.

---

## Cómo agregar una unidad

### 1. Crea el archivo

Las unidades viven en `src/content/docs/`. La estructura es:

```
src/content/docs/
├── modulo-0/           → unidades del M0
├── track-be/           → unidades core del track Backend
├── track-be/extras/    → unidades extra del track Backend
├── track-fe/           → unidades core del track Frontend
├── track-fe/extras/    → unidades extra del track Frontend
├── track-devops/       → unidades core del track DevOps
├── track-devops/extras/ → unidades extra del track DevOps
└── extra/              → extras sin track específico
```

### 2. Naming de archivos

Usa kebab-case, en inglés, describiendo el tema:

- Bien: `rls-multi-tenant.md`, `drizzle-fundamentos.md`, `react-hook-form-zod.md`
- Mal: `RLS_MultiTenant.md`, `drizzle fundamentos.md`, `formularios.md`

### 3. Frontmatter obligatorio

Toda unidad pedagógica necesita este frontmatter mínimo:

```yaml
---
title: Título en venezolano (sencillo, no académico)
description: Una línea describiendo qué cubre la unidad (máx 100 chars)
sidebar:
  order: N
tags: [tag1, tag2]
estimated_hours: N
track: modulo-0 | track-be | track-fe | track-devops
prerequisites: []
---
```

Para unidades extra, agrega:

```yaml
sidebar:
  order: N
  badge:
    text: extra
    variant: caution
extra: true
```

### 4. Estructura de 3 secciones

Cada unidad pedagógica tiene exactamente estas 3 secciones H2:

```markdown
## 1. Conceptos

## 2. Lab guiado

### Setup

### Paso 1: ...

### Verificación final

## 3. Checkpoint

### Preguntas conceptuales

1. ...
2. ...
3. ...

### Tests que deben pasar / fallar

- [ ] Test 1: ...
- [ ] Test 2: ...
```

### 5. Tono

Lee `docs-internal/style-guide-maracucho.md` antes de escribir. El resumen:

- Tú venezolano (no vos rioplatense, no usted)
- Directo, sin happy talk
- Código en inglés, texto en español
- "fíjate que...", "imagínate que...", "vale, ahora..."

---

## Checklist pre-PR

Antes de abrir un PR con una unidad nueva o editada:

- [ ] Frontmatter válido (`pnpm build` no tiene errores de validación)
- [ ] Las 3 secciones presentes (Conceptos, Lab guiado, Checkpoint)
- [ ] Tono maracucho — sin voseo rioplatense, sin "usted"
- [ ] Código en inglés — identificadores, comentarios in-code
- [ ] Versiones pinneadas en los snippets que instalan deps
- [ ] Links internos válidos — no hay slugs rotos (`pnpm build` lo detecta)
- [ ] `last_updated` con la fecha del PR (formato `YYYY-MM-DD`)
- [ ] Si hay un lab en `examples/`, corre con `pnpm install && pnpm test`
- [ ] `pnpm build` en verde local

---

## Conventional commits

Usamos conventional commits. Tipos aceptados:

| Tipo                  | Cuándo                                     |
| --------------------- | ------------------------------------------ |
| `feat(modulo-0):`     | Nueva unidad en Módulo 0                   |
| `feat(track-be):`     | Nueva unidad en Track Backend              |
| `feat(track-fe):`     | Nueva unidad en Track Frontend             |
| `feat(track-devops):` | Nueva unidad en Track DevOps               |
| `fix(modulo-0):`      | Corrección técnica en una unidad           |
| `docs:`               | Cambios en docs internos (este directorio) |
| `chore:`              | Config, deps, tooling                      |

Sin `Co-Authored-By:`, sin AI attribution en el commit message.
