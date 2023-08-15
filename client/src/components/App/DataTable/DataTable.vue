<template>
  <v-data-table
    class="elevation-1"
    :headers="visibleColumns"
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
          @click="$refs.filterModal.openModal(visibleColumns)"
        >
          <v-icon left>mdi-filter</v-icon> Filter
        </v-btn>
        <filter-modal
          ref="filterModal"
          :columns="tableColumns"
          @filter="(filters) => $emit('filter', filters)"
        />
