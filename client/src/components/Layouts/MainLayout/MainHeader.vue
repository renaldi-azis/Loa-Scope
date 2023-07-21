<template>
  <v-app-bar app dark clipped-left color="primary">
    <v-app-bar-nav-icon
      text-color="white"
      @click="$store.dispatch('appStore/setMenuSidebarOpen', !appState.isMenuSidebarOpen)"
    />
    <v-spacer />
    <div class="title-wrapper d-none d-md-block">
      <small><i>Automated quantification of filarial infections</i></small>
