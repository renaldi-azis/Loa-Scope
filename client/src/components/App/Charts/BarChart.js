import { Bar, mixins } from 'vue-chartjs';

export default {
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
