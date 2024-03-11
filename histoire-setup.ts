import './assets/css/tailwind.css';
import './assets/css/fonts.css';
import 'plyr/dist/plyr.css';

import { defineSetupVue3 } from '@histoire/plugin-vue';
import VueTermynalPlugin from '@lehoczky/vue-termynal';

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
  app.use(VueTermynalPlugin);
});
