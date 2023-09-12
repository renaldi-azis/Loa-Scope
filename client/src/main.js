import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';
import VueLoadingOverlay from 'vue-loading-overlay';
import VueSweetAlert2 from 'vue-sweetalert2';
import toastr from 'toastr';

import './registerServiceWorker';
import './config';
import './helpers';
import './filters';
import './services/ApiService';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import AppMixin from './mixins/AppMixin';

import App from './App.vue';

import 'vuetify/dist/vuetify.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
// Temp comment
// eslint-disable-next-line
import 'sweetalert2/dist/sweetalert2.min.css';
import 'toastr/build/toastr.min.css';

Vue.config.productionTip = false;

toastr.options = { maxOpened: 1 };
Vue.prototype.$toastr = toastr;

Vue.use(VueGoogleMaps, {
  load: {
