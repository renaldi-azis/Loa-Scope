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
      @switch:view="onSwitchView"
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

