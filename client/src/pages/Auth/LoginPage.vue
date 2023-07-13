<template>
  <v-row justify="center" align="center">
      <v-form ref="loginForm" @submit.prevent="onLogin">
        <v-card class="pa-4">
          <v-card-title>
            <h1 class="display-1">Login</h1>
          </v-card-title>
          <v-card-text>
