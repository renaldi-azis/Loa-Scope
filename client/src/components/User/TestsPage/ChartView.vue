<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon @click="$emit('switch:view', 'TEST_DATA_TABLE')">arrow_back_ios</v-icon>
          <div class="ml-2">LoaScope Chart Analytics</div>
