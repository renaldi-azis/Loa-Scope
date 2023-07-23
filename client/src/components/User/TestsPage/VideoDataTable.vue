<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <div class="ml-2">LoaScope Video Data</div>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="videoTableColumns"
      :items="videos"
      :loading="status.isLoading"
      @click:row="onClickRow"
    >
      <template v-slot:item.recordedAt="{ item }">
        {{ item.recordedAt | dateFormatter('YYYY-MM-DD hh:mm:ss A') }}
      </template>
    </v-data-table>
    <video-modal ref="videoModal" />
  </v-card>
</template>
