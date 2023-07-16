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
