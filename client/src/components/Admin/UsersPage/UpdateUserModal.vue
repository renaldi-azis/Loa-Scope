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
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import _ from 'lodash';
import UserService from '@/services/UserService';

export default {
  name: 'UpdateUserModal',
  mixins: [UserService],
  props: ['refresh'],
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
    openModal(user) {
      this.user = { ...user };
      this.$set(this.status, 'isModalOpen', true);
    },
    closeModal() {
      this.$set(this.status, 'isModalOpen', false);
    },
    async onUpdateUser() {
      if (!this.$refs.updateUserForm.validate()) return;
      this.$set(this.status, 'isSaving', true);
      try {
        const payload = _.pick(this.user, ['filter']);
        await this.updateUser(this.user.id, payload);
        await this.refresh();
        this.$toastr.success('User has been updated.', 'Success!');
        this.closeModal();
      } catch (err) {
        this.handleErrorResponse(err);
      }
      this.$set(this.status, 'isSaving', false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
