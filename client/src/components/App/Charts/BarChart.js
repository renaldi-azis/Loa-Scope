import { Bar, mixins } from 'vue-chartjs';

// Temp comment
export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.addPlugin(this.options.plugins[0]);
    this.renderChart(this.chartData, this.options);
  },
