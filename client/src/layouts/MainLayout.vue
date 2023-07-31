<template>
  <v-app>
    <main-sidebar></main-sidebar>
    <v-content>
      <v-container class="pa-6" fluid>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
