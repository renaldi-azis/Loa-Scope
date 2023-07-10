<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="changePasswordForm" @submit.prevent="onChangePassword()">
      <v-card>
          <span class="title">Change Password</span>
