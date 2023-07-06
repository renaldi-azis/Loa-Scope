<template>
  <v-dialog max-width="800" v-model="status.isModalOpen">
    <v-form ref="filterForm" @submit.prevent="onApplyFilter()">
      <v-card>
        <v-card-title>
          <span class="title">Filter</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div
            :key="`filter-group-${groupIndex}`"
          >
            <v-card class="px-6 py-4">
              <div
                v-for="(filter, filterIndex) in filterGroup"
                :key="`filter-${filterIndex}`"
