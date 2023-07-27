<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    offset-y
    :disabled="disabled"
    max-width="290px"
    min-width="290px"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
