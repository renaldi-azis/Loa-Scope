<template>
  <v-navigation-drawer
    class="grey darken-3"
    app
    dark
    clipped
    left
    width="250"
    v-model="isMenuSidebarOpen"
  >
    <v-list>
      <template v-for="(menuItem, menuIndex) in menuItems">
        <v-list-item
          :class="{'active': activeMainIndex === menuIndex}"
