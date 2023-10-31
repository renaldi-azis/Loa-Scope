<template>
  <v-menu
    left
    offset-y
    max-height="400"
    :close-on-content-click="false"
    v-model="menu"
  >
    <template v-slot:activator="{ on }">
      <v-btn outlined color="primary" v-on="on">
        <v-icon left>mdi-table-headers-eye</v-icon> Columns
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="column in value" :key="column.value">
        <v-checkbox
          :label="column.text"
          color="primary"
          v-model="column.visible"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'ColumnMenu',
  props: ['value'],
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
