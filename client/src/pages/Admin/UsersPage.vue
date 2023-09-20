<template>
  <div class="fill-width">
    <v-card>
      <v-toolbar flat color="grey lighten-3">
        <v-toolbar-title>Users</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="warning" @click="$refs.createUserModal.openModal()">New User</v-btn>
      </v-toolbar>
      <v-data-table
        class="elevation-1"
        :headers="userTableHeaders"
        :items="users"
        :loading="status.isLoading"
      >
        <template v-slot:item.createdAt="{ item }">
          {{ item.createdAt | dateFormatter('MMMM DD, YYYY hh:mm A') }}
        </template>
        <template v-slot:item.action="{ item }">
          <td class="layout justify-center">
            <v-btn icon class="mx-0" @click="$refs.changePasswordModal.openModal(item)">
              <v-icon color="warning">security</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="$refs.updateUserModal.openModal(item)">
              <v-icon color="primary">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="onDeleteUser(item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card>

    <change-password-modal ref="changePasswordModal"></change-password-modal>
    <create-user-modal ref="createUserModal" :refresh="fetchUsers"></create-user-modal>
    <update-user-modal ref="updateUserModal" :refresh="fetchUsers"></update-user-modal>
  </div>
</template>

<script>
import UserService from '@/services/UserService';
import ChangePasswordModal from '@/components/Admin/UsersPage/ChangePasswordModal.vue';
import CreateUserModal from '@/components/Admin/UsersPage/CreateUserModal.vue';
import UpdateUserModal from '@/components/Admin/UsersPage/UpdateUserModal.vue';

export default {
  name: 'UsersPage',
  mixins: [UserService],
  components: {
    ChangePasswordModal,
    CreateUserModal,
    UpdateUserModal,
  },
  data() {
    return {
      users: [],
      status: {
        isLoading: false,
        isDeleting: false,
      },
    };
  },
  computed: {
    userTableHeaders() {
      return [
        { text: 'Username', value: 'username' },
        { text: 'Role', value: 'role' },
        { text: 'Filter', value: 'filter' },
        { text: 'Created At', value: 'createdAt' },
        { text: '', value: 'action', sortable: false },
      ];
    },
  },
