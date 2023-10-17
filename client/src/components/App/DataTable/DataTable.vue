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
        <column-menu v-model="tableColumns" />
      </div>
    </template>
    <template v-slot:item.executedAt="{ item }">
      {{ item.executedAt | dateFormatter('YYYY-MM-DD hh:mm:ss A') }}
    </template>
  </v-data-table>
</template>

<script>
import ColumnMenu from './ColumnMenu.vue';
import FilterModal from './FilterModal.vue';

export default {
  name: 'DataTable',
  components: {
    ColumnMenu,
    FilterModal,
  },
  props: ['columns', 'items', 'loading'],
  data: () => ({
    tableColumns: [],
  }),
  computed: {
    visibleColumns() {
      return this.tableColumns.filter((column) => column.visible);
    },
  },
  created() {
