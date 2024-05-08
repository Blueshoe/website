export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event);

  console.log(urlObj.pathname);

  if (urlObj.pathname.includes('/our-services/api-development-agency')) {
    await sendRedirect(event, '/our-services/api-development-company', 308);
  }
});
