<template>
  <v-data-table
    class="elevation-1"
    :headers="visibleColumns"
    :items="items"
    :loading="loading"
    @click:row="(row) => $emit('click:row', row)"
  >
