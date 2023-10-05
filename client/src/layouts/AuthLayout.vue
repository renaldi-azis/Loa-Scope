<template>
  <v-app>
    <v-content class="grey darken-3">
      <v-container fluid fill-height fill-screen>
        <transition name="fade" mode="out-in" appear>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
};
