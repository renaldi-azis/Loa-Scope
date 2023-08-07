<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    offset-y
    :disabled="disabled"
    min-width="290px"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        readonly
        :hide-details="hideDetails"
        :label="label"
        :value="formattedDate"
        :rules="rules"
