<template>
  <v-dialog max-width="800" v-model="status.isModalOpen">
    <v-form ref="filterForm" @submit.prevent="onApplyFilter()">
      <v-card>
        <v-card-title>
          <span class="title">Filter</span>
          <v-spacer />
          <v-icon @click="closeModal">close</v-icon>
