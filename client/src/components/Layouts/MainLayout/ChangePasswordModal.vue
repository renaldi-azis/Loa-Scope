<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="changePasswordForm" @submit.prevent="onChangePassword()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <span class="title">Change Password</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            type="password"
            label="Current Password*"
            :rules="getValidators('Current password', ['required'])"
            v-model="user.currentPassword"
          />
          <v-text-field
            type="password"
