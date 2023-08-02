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
