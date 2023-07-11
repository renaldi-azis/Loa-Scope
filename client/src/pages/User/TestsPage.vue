<template>
  <div class="fill-width">
      @switch:view="onSwitchView"
      @click:row="(row) => $refs.videoDataTable.load(row, 'TEST_DATA_TABLE')"
