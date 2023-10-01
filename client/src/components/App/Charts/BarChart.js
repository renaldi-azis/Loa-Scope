import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
// Temp comment
    this.addPlugin(this.options.plugins[0]);
