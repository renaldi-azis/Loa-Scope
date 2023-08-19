<template>
  <v-app>
    <main-header></main-header>
    <main-sidebar></main-sidebar>
    <v-content>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
