export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event);

  if (urlObj.pathname.includes('/our-services/api-development-agency')) {
    await sendRedirect(event, '/our-services/api-development-company', 308);
  }
});
