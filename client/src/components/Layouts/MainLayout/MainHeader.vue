<template>
  <v-app-bar app dark clipped-left color="primary">
    <v-app-bar-nav-icon
      text-color="white"
      @click="$store.dispatch('appStore/setMenuSidebarOpen', !appState.isMenuSidebarOpen)"
    />
    <v-spacer />
    <div class="title-wrapper d-none d-md-block">
      <div class="title">LoaScope {{isUser ? 'Data' : 'Admin'}} Portal</div>
      <small><i>Automated quantification of filarial infections</i></small>
    </div>
    <v-toolbar-items class="align-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-avatar :color="getColor(userData.id)" size="40">
              <span class="white--text title">{{ userNameAbbr }}</span>
            </v-avatar>
            <span class="pl-2 subheading">{{ userData.username }}</span>
