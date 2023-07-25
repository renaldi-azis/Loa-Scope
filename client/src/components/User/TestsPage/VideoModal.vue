<template>
  <v-dialog
    max-width="600"
    v-model="status.isModalOpen"
    @click:outside="closeModal"
  >
    <v-card>
      <v-card-title class="grey lighten-3">
        <span class="title">LoaScope Video</span>
        <v-spacer />
      </v-card-title>
