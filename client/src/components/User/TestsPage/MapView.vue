<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon @click="$emit('switch:view', 'TEST_DATA_TABLE')">arrow_back_ios</v-icon>
          <div class="ml-2">LoaScope Map Analytics</div>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <div class="d-flex">
        <v-spacer />
        <div>
          <v-select
            label="Greater than"
            :items="wormCountTicks"
            v-model="minWormCount"
            @change="selectedMarkerData = null"
          />
        </div>
        <div class="ml-2">
          <v-select
            label="Less than"
            :items="wormCountTicks"
            v-model="maxWormCount"
            @change="selectedMarkerData = null"
