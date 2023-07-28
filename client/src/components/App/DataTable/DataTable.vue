<template>
  <v-data-table
    class="elevation-1"
    :items="items"
    :loading="loading"
    @click:row="(row) => $emit('click:row', row)"
  >
    <template v-slot:top>
      <div class="d-flex justify-end pa-4">
        <v-btn
          class="mr-2"
          outlined
          color="primary"
