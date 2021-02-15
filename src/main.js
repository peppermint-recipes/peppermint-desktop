import Vue from 'vue';

import {
  App, router, store, vuetify,
} from '@peppermint-recipes/peppermint-web';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
