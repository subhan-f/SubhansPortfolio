import rss from '@astrojs/rss';
import { fetchStrapi } from '@lib/strapi';
import type { StrapiList, StrapiArticle } from '@lib/strapi';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const { data: posts } = await fetchStrapi<StrapiList<StrapiArticle>>(
    '/articles',
    { 'sort': 'publishedAt:desc' }
  );

  return rss({
    title: 'Subhan Farrakh Blog',
    description: 'Articles about web development, AI automation, and modern frontend technologies.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.publishedAt),
      link: `/blog/${post.slug}/`,
      categories: post.tags ?? (post.category ? [post.category.name] : []),
    })),
    customData: '<language>en-us</language>',
  });
}
