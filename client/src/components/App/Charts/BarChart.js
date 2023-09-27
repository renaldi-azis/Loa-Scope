import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
// Temp comment
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
