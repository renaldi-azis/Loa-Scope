<template>
  <v-app>
    <v-content class="grey darken-3">
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
};
