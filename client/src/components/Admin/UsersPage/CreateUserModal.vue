<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="createUserForm" @submit.prevent="onCreateUser()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <span class="title">Create User</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            label="Username*"
            :rules="getValidators('Username', ['required'])"
            v-model="user.username"
          />
          <v-text-field
            type="password"
            label="Password*"
            :rules="getValidators('Password', ['required', 'min-len:6'])"
            v-model="user.password"
          />
          <v-text-field
            label="Filter"
            v-model="user.filter"
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
