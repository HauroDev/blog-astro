import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'HauroDev | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: 'https://blog-astro-haurodev.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-ar</language>`
  });
}
