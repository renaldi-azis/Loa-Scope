<template>
  <div class="fill-width">
    <test-data-table
      @switch:view="onSwitchView"
      v-show="view === 'TEST_DATA_TABLE'"
    />
    <chart-view
