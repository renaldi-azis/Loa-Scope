<template>
  <v-dialog max-width="450" v-model="status.isModalOpen">
    <v-form ref="changePasswordForm" @submit.prevent="onChangePassword()">
      <v-card>
        <v-card-title class="grey lighten-3">
          <v-spacer />
