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
    </template>
    <v-list>
