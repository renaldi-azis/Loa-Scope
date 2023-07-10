<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <div class="ml-2">LoaScope Chart Analytics</div>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <div class="d-flex align-center mb-4">
        <div class="d-none d-md-block legend">
          <div>Total records: <b>{{ data.length }}</b></div>
          <div>Selected records: <b>{{ filteredData.length }}</b></div>
