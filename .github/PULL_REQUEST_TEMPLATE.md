## Qué cambia

<!-- Describí brevemente qué hace este PR. -->

## Tipo

- [ ] Nueva unidad (`feat`)
- [ ] Fix técnico (`fix`)
- [ ] Refactor de estructura (`refactor`)
- [ ] Docs internos / tooling (`docs` / `chore`)
- [ ] Otro: \***\*\_\*\***

## Checklist de calidad (si toca contenido pedagógico)

- [ ] Frontmatter Starlight válido — `pnpm check` pasa sin errores
- [ ] Las 3 secciones obligatorias presentes (`## 1. Conceptos`, `## 2. Lab guiado`, `## 3. Checkpoint`) — solo si es unidad pedagógica
- [ ] Tono venezolano — sin "vos", sin "che", sin voseo rioplatense
- [ ] Código en inglés — identificadores, comentarios in-code
- [ ] Versiones pinneadas en snippets de instalación (si aplica)
- [ ] Links internos válidos — `pnpm build` no reporta rutas rotas
- [ ] `last_updated` actualizado con la fecha del PR (`YYYY-MM-DD`)
- [ ] Si la unidad tiene `examples/`, el lab corre con `pnpm install && pnpm test`
- [ ] `pnpm build` verde local

## Preview

<!-- El bot de Cloudflare Pages va a postear el preview URL automáticamente. -->

## Code review

- [ ] Founder (Eliab) revisó tono y contenido técnico
