export const scrollToElement = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    const top = el.offsetTop;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
