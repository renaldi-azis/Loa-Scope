<template>
  <v-menu
    left
    offset-y
    max-height="400"
    v-model="menu"
  >
    <template v-slot:activator="{ on }">
      <v-btn outlined color="primary" v-on="on">
