import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
    this.addPlugin(this.options.plugins[0]);
