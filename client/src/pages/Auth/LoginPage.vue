<template>
  <v-row justify="center" align="center">
    <v-col xs="12" sm="6" md="4" lg="3">
      <v-form ref="loginForm" @submit.prevent="onLogin">
          <v-card-title>
            <h1 class="display-1">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              prepend-inner-icon="person"
              label="Username*"
