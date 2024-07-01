import { SitemapStream, streamToPromise } from 'sitemap';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).where({ _partial: false }).find();
  const sitemap = new SitemapStream({
    hostname: 'https://www.blueshoe.de/'
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path === '/' ? '/' : doc._path + '/',
      changefreq: 'monthly'
    });
  }

  sitemap.write({
    url: '/blog/',
    changefreq: 'monthly'
  });

  sitemap.write({
    url: '/projekte/',
    changefreq: 'monthly'
  });

  sitemap.end();

  return streamToPromise(sitemap);
});
