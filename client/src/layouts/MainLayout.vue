<template>
  <v-app>
    <main-header></main-header>
    <main-sidebar></main-sidebar>
    <v-content>
      <v-container class="pa-6" fluid>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MainHeader from '@/components/Layouts/MainLayout/MainHeader.vue';
import MainSidebar from '@/components/Layouts/MainLayout/MainSidebar.vue';

