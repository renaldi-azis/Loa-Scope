<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon>mdi-home-analytics</v-icon>
          <div class="ml-2">LoaScope Test Data</div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom v-for="action in actions" :key="action.tooltip">
        <template v-slot:activator="{ on }">
          <v-btn
            class="mx-2"
            fab
            small
            color="primary"
            v-on="on"
            @click="action.handler"
          >
            <v-icon dark v-html="action.icon" />
          </v-btn>
        </template>
        <span>{{ action.tooltip }}</span>
      </v-tooltip>
