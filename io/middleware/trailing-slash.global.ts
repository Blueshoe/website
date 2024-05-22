export default function ({ path, query, hash }) {
  if (path === '/' || path.endsWith('/')) return;

  const nextPath = path + '/';
  const nextRoute = { path: nextPath, query, hash };

  // 308 Permanent Redirect
  if (path === '/hannes' || path === '/hannes/') {
    return navigateTo("https://calendar.app.google/1c1opTAqnXqyHrsR6/", { redirectCode: 308, external: true });
  }
  if (path === '/michael' || path === '/michael/') {
    return navigateTo("https://calendar.app.google/jcg6DMuBZV47i4n9A/", { redirectCode: 308, external: true });
  }
  return navigateTo(nextRoute, { redirectCode: 308 });
}
