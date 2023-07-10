<template>
  <v-dialog
    max-width="600"
    v-model="status.isModalOpen"
    @click:outside="closeModal"
