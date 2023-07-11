<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="createUserForm" @submit.prevent="onCreateUser()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <span class="title">Create User</span>
          <v-icon @click="closeModal">close</v-icon>
