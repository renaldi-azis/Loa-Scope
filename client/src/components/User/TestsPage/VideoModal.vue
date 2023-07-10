<template>
  <v-dialog
    v-model="status.isModalOpen"
    @click:outside="closeModal"
