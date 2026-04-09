export function generateMeta({
  title,
  description,
  path,
  ogImage = 'https://subhanfarrakh.com/og-image.jpg',
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}) {
  const url = `https://subhanfarrakh.com${path}`;
  return [
    { title },
    { name: 'description', content: description },
    { rel: 'canonical', href: url },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];
}