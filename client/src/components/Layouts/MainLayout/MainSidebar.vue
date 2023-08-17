<template>
  <v-navigation-drawer
    class="grey darken-3"
    app
    dark
    fixed
    clipped
    left
    width="250"
    v-model="isMenuSidebarOpen"
  >
    <v-list>
      <template v-for="(menuItem, menuIndex) in menuItems">
        <v-list-item
          @click="onClickMenuItem($event, menuItem)"
          :key="menuItem.link"
          v-if="menuItem.show">
          <v-list-item-action>
            <v-icon size="30" v-text="menuItem.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'MainSidebar',
  data() {
    return {
      menuItems: [],
    };
  },
