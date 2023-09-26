<template>
  <div class="fill-width">
    <test-data-table
      @switch:view="onSwitchView"
      @click:row="(row) => $refs.videoDataTable.load(row, 'TEST_DATA_TABLE')"
      v-show="view === 'TEST_DATA_TABLE'"
    />
    <chart-view
      @switch:view="onSwitchView"
      v-show="view === 'CHART_VIEW'"
    />
    <map-view
      @view:videos="(test) => $refs.videoDataTable.load(test, 'MAP_VIEW')"
      v-show="view === 'MAP_VIEW'"
    />
    <video-data-table
      ref="videoDataTable"
      @switch:view="onSwitchView"
      v-show="view === 'VIDEO_DATA_TABLE'"
    />
  </div>
</template>

<script>
import TestDataTable from '@/components/User/TestsPage/TestDataTable.vue';
import VideoDataTable from '@/components/User/TestsPage/VideoDataTable.vue';
import ChartView from '@/components/User/TestsPage/ChartView.vue';
import MapView from '@/components/User/TestsPage/MapView.vue';

export default {
  name: 'TestsPage',
  components: {
    TestDataTable,
    VideoDataTable,
    ChartView,
    MapView,
  },
  data() {
    return {
      view: 'TEST_DATA_TABLE',
    };
