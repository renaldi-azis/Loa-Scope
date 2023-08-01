<template>
  <v-app>
    <main-header></main-header>
    <v-content>
      <v-container class="pa-6" fluid>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
