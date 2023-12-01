export const scrollToElement = (id: string, offset: number = 0) => {
  const el = document.getElementById(id);

  if (el) {
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
