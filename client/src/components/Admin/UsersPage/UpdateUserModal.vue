<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="updateUserForm" @submit.prevent="onUpdateUser()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <span class="title">Update User</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
        </v-card-title>
