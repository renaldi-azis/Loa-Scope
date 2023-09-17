<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon>mdi-home-analytics</v-icon>
          <div class="ml-2">LoaScope Test Data</div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom v-for="action in actions" :key="action.tooltip">
        <template v-slot:activator="{ on }">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
            v-on="on"
            @click="action.handler"
          >
            <v-icon dark v-html="action.icon" />
          </v-btn>
        </template>
        <span>{{ action.tooltip }}</span>
      </v-tooltip>
    </v-toolbar>
    <data-table
      :columns="testTableColumns"
      :items="appState.tests"
      :loading="status.isLoading"
      @filter="onFilter"
    />
  </v-card>
</template>

<script>
import download from 'js-file-download';
import moment from 'moment';
import TestService from '@/services/TestService';
import DataTable from '@/components/App/DataTable/DataTable.vue';

export default {
  name: 'TestDataTable',
  mixins: [TestService],
  components: {
    DataTable,
  },
  data: () => ({
    status: {
      isLoading: false,
    },
  }),
  computed: {
    actions() {
      return [
        {
          tooltip: 'Chart',
          icon: 'mdi-chart-bar',
          handler: () => this.$emit('switch:view', 'CHART_VIEW'),
        },
        {
          tooltip: 'Map',
          icon: 'mdi-map-marker',
          handler: () => this.$emit('switch:view', 'MAP_VIEW'),
        },
        {
          tooltip: 'Export as CSV',
          icon: 'mdi-download',
          handler: this.onExportAsCSV,
        },
      ];
    },
    testTableColumns() {
      return [
        {
          text: 'Device ID',
          value: 'deviceId',
          type: 'string',
          visible: true,
        },
        {
          text: 'Patient ID',
          value: 'patientId',
          type: 'string',
          visible: true,
        },
        {
          text: 'Test ID',
          value: 'testId',
          type: 'string',
          visible: true,
        },
        {
          text: 'Latitude',
          value: 'latitude',
          type: 'number',
          visible: true,
        },
        {
          text: 'Longitude',
          value: 'longitude',
          type: 'number',
          visible: true,
        },
        {
          text: 'Total Worm Count',
          value: 'totalWormCount',
          type: 'number',
          visible: true,
        },
        {
          text: 'Video Count',
          value: 'videoCount',
          type: 'number',
          visible: true,
        },
