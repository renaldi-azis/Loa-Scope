import { Bar, mixins } from 'vue-chartjs';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
// Temp comment
  props: ['chartData', 'options'],
