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
            label="New Password*"
            :rules="getValidators('New password', ['required', 'min-len:6'])"
            v-model="user.newPassword"
          />
          <v-text-field
            type="password"
            label="Confirm Password*"
            :rules="getValidators('Confirm password', ['equal:user.newPassword:new password'])"
            v-model="user.confirmPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary" :loading="status.isSaving">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import _ from 'lodash';
import ProfileService from '@/services/ProfileService';

export default {
  name: 'ChangePasswordModal',
  mixins: [ProfileService],
  data() {
    return {
      user: {},
      status: {
        isModalOpen: false,
        isSaving: false,
      },
    };
  },
  methods: {
    openModal() {
      this.user = {};
      if (this.$refs.changePasswordForm) {
        this.$refs.changePasswordForm.reset();
      }
