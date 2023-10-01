import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  mounted() {
    this.addPlugin(this.options.plugins[0]);
