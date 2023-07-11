<template>
  <v-app-bar app dark clipped-left color="primary">
    <v-app-bar-nav-icon
      @click="$store.dispatch('appStore/setMenuSidebarOpen', !appState.isMenuSidebarOpen)"
    />
