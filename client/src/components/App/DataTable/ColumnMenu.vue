<template>
  <v-menu
    left
    offset-y
    max-height="400"
    :close-on-content-click="false"
    v-model="menu"
  >
    <template v-slot:activator="{ on }">
