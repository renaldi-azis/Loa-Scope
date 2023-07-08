<template>
  <v-app-bar app dark clipped-left color="primary">
    <v-app-bar-nav-icon
      text-color="white"
      @click="$store.dispatch('appStore/setMenuSidebarOpen', !appState.isMenuSidebarOpen)"
