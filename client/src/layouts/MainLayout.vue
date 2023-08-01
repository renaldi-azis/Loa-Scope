<template>
  <v-app>
    <main-header></main-header>
    <main-sidebar></main-sidebar>
      <v-container class="pa-6" fluid>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
