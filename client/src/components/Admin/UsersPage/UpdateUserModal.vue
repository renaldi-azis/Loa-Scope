<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="updateUserForm" @submit.prevent="onUpdateUser()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <span class="title">Update User</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            label="Username*"
            :value="user.username"
            readonly
          />
          <v-text-field
            label="Filter"
            v-model="user.filter"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary" :loading="status.isSaving">Save</v-btn>
        </v-card-actions>
