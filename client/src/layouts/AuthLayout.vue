<template>
  <v-app>
      <v-container fluid fill-height fill-screen>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
