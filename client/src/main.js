import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';
import VueLoadingOverlay from 'vue-loading-overlay';
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
