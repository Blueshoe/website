import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash && document.querySelector(to.hash) && document.querySelector(to.hash).getBoundingClientRect()) {
      const nav = document.querySelector('nav');
      console.log("Trolololo");
      console.log(nav?.getBoundingClientRect()?.height || 0);
      const pos =
        window.scrollY +
        document.querySelector(to.hash).getBoundingClientRect().top -
        (nav?.getBoundingClientRect()?.height || 0);
      
      console.log(pos);
      return {
        top: pos,
        behavior: 'smooth'
      };
    }
    console.log("Fuu");
    return { left: 0, top: 0, behaviour: 'smooth' };
  };
});
