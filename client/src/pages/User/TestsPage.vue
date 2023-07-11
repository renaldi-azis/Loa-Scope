<template>
    <test-data-table
      @switch:view="onSwitchView"
      @click:row="(row) => $refs.videoDataTable.load(row, 'TEST_DATA_TABLE')"
      v-show="view === 'TEST_DATA_TABLE'"
