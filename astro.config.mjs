// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://study-plan-tech.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Plan B — Rush Técnico',
      description:
        'Plan de estudio técnico para devs que se suman al equipo Rush. Módulo 0 + 3 tracks (Backend, Frontend, DevOps).',
      defaultLocale: 'es',
      locales: {
        es: { label: 'Español (Venezuela)', lang: 'es-VE' },
      },
      social: [],
      editLink: {
        baseUrl: 'https://github.com/Rush-Vzla/study-plan-tech/edit/master/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Empezar acá',
          items: [
            { label: 'Bienvenido', link: '/' },
            { label: 'Cómo usar este plan', link: '/meta/como-usar-este-plan/' },
            { label: 'Code review process', link: '/meta/code-review-process/' },
            { label: 'Glosario', link: '/meta/glosario/' },
          ],
        },
        {
          label: 'Módulo 0 — Fundaciones (obligatorio)',
          badge: { text: 'obligatorio', variant: 'success' },
          collapsed: false,
          items: [{ autogenerate: { directory: 'modulo-0' } }],
        },
        {
          label: 'Track Backend',
          badge: { text: 'BE', variant: 'note' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'track-be', collapsed: true } }],
        },
        {
          label: 'Track Frontend',
          badge: { text: 'FE', variant: 'note' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'track-fe', collapsed: true } }],
        },
        {
          label: 'Track DevOps',
          badge: { text: 'DevOps', variant: 'note' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'track-devops', collapsed: true } }],
        },
        {
          label: 'Más allá de Rush (extra)',
          badge: { text: 'opcional', variant: 'caution' },
          collapsed: true,
          items: [{ autogenerate: { directory: 'extra', collapsed: true } }],
        },
      ],
    }),
  ],
});
