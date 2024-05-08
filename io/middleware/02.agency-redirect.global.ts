export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/our-services/api-development-agency/')
    return navigateTo('/our-services/api-development-company', { redirectCode: 308 });
});
