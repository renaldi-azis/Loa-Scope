import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';
import VueLoadingOverlay from 'vue-loading-overlay';
import VueSweetAlert2 from 'vue-sweetalert2';
import toastr from 'toastr';

import './config';
import './helpers';
import './filters';
import './services/ApiService';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
