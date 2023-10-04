import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['chartData', 'options'],
  mounted() {
    this.addPlugin(this.options.plugins[0]);
