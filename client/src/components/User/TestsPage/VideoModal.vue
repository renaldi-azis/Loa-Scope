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
        <v-icon @click="closeModal">close</v-icon>
      </v-card-title>
      <v-divider />

      <div class="video-wrapper">
        <video
          ref="videoPlayer"
          class="d-flex"
          :src="videoUrl"
          poster="/images/video-logo.gif"
          width="100%"
