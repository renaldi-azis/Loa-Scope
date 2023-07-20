<template>
  <v-data-table
    class="elevation-1"
    :headers="visibleColumns"
    :items="items"
    @click:row="(row) => $emit('click:row', row)"
  >
    <template v-slot:top>
