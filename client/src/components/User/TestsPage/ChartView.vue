<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon @click="$emit('switch:view', 'TEST_DATA_TABLE')">arrow_back_ios</v-icon>
          <div class="ml-2">LoaScope Chart Analytics</div>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <div class="d-flex align-center mb-4">
        <div class="d-none d-md-block legend">
          <div>Total records: <b>{{ data.length }}</b></div>
          <div>Selected records: <b>{{ filteredData.length }}</b></div>
        </div>
        <v-spacer />
        <div>
          <v-select label="Greater than" :items="wormCountTicks" v-model="minWormCount" />
        </div>
        <div class="ml-2">
          <v-select label="Less than" :items="wormCountTicks" v-model="maxWormCount" />
        </div>
      </div>
      <bar-chart
        :chart-data="chartData"
        :options="chartOptions"
        style="height: 400px;"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash';
import BarChart from '@/components/App/Charts/BarChart';

const UNIT = 50;

export default {
  name: 'ChartView',
  components: {
    BarChart,
  },
  data() {
    return {
      minWormCount: 0,
      maxWormCount: 0,
    };
  },
  computed: {
    data() {
      return this.appState.tests;
    },
    filteredData() {
      return this.data.filter((item) => item.totalWormCount >= this.minWormCount
        && item.totalWormCount <= this.maxWormCount);
    },
    wormCountTicks() {
      const max = Math.max(...this.data.map((item) => item.totalWormCount));
      return _.range(0, Math.ceil(max / UNIT + 1) * UNIT, UNIT);
    },
    chartData() {
      const minIndex = this.minWormCount / UNIT;
      const maxIndex = this.maxWormCount / UNIT;
      const labels = this.wormCountTicks.slice(minIndex, maxIndex);
      const values = [];
      for (let i = 0; i < labels.length; i += 1) {
        values[i] = this.data.filter((item) => item.totalWormCount
          >= this.wormCountTicks[minIndex + i]
          && item.totalWormCount < this.wormCountTicks[minIndex + i + 1]).length;
      }
      return {
        labels,
        datasets: [
          {
            label: 'Number of occurencies',
            backgroundColor: '#36a9e1',
            data: values,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          displayColors: false,
          titleFontSize: 16,
          bodyFontSize: 14,
          bodyFontStyle: 'bold',
          footerFontSize: 14,
          callbacks: {
            beforeTitle: (tooltipItem, data) => `Worm Count: ${data.labels[tooltipItem[0].index]}`,
            title: () => '',
            afterTitle: (tooltipItem, data) => `Number of occurencies: ${data.datasets[0].data[tooltipItem[0].index]}`,
            label: () => '',
            afterLabel: (tooltipItem, data) => {
              const baseValue = +data.labels[tooltipItem.index];
              return this.getPercentage(baseValue, false);
            },
            afterBody: (tooltipItem, data) => {
              const baseValue = +data.labels[tooltipItem[0].index];
              return this.getPercentage(baseValue, true);
            },
            beforeFooter: () => this.getPercentage(23000, true),
            afterFooter: () => this.getPercentage(30000, true),
          },
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Worm Count',
              fontSize: 16,
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Number of occurencies',
              fontSize: 16,
            },
          }],
        },
        customLine: {
          color: 'red',
        },
        plugins: [{
          id: 'bar-chart-plugin',
          beforeEvent: (chart, e) => {
            if (e.type === 'mousemove' && e.x >= e.chart.chartArea.left && e.x <= e.chart.chartArea.right) {
              // eslint-disable-next-line
              chart.options.customLine.x = e.x;
            }
          },
          beforeDraw: (chart) => {
            const { ctx } = chart.chart;
            const { chartArea } = chart;
            const { x } = chart.options.customLine;
            // eslint-disable-next-line
            if (!isNaN(x)) {
