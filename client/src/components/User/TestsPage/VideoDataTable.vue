<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon @click="$emit('switch:view', prevPage)">arrow_back_ios</v-icon>
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

<script>
import TestService from '@/services/TestService';
import VideoModal from './VideoModal.vue';

export default {
  name: 'VideoDataTable',
  mixins: [TestService],
  components: {
    VideoModal,
  },
  data: () => ({
    prevPage: 'TEST_DATA_TABLE',
    videos: [],
    status: {
      isLoading: false,
    },
  }),
  computed: {
    videoTableColumns() {
      return [
        {
          text: 'Video Number',
          value: 'videoNumber',
        },
        {
          text: 'Worm Count',
          value: 'wormCount',
        },
        {
          text: 'Video URL',
          value: 'videoUrl',
        },
        {
          text: 'Recorded At',
          value: 'recordedAt',
        },
      ];
    },
  },
  methods: {
    async load(test, prevPage) {
      this.prevPage = prevPage;
      this.videos = [];
      this.$emit('switch:view', 'VIDEO_DATA_TABLE');
      this.$set(this.status, 'isLoading', true);
      const { data } = await this.getTestVideos(test.testId);
      this.videos = data;
      this.$set(this.status, 'isLoading', false);
    },
    onClickRow(row) {
      this.$refs.videoModal.openModal(row.videoUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
