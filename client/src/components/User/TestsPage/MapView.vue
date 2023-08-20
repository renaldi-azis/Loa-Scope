<template>
  <v-card>
    <v-toolbar flat color="grey lighten-3">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-icon @click="$emit('switch:view', 'TEST_DATA_TABLE')">arrow_back_ios</v-icon>
          <div class="ml-2">LoaScope Map Analytics</div>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <div class="d-flex">
        <v-spacer />
        <div>
          <v-select
            label="Greater than"
            :items="wormCountTicks"
            v-model="minWormCount"
            @change="selectedMarkerData = null"
          />
        </div>
        <div class="ml-2">
          <v-select
            label="Less than"
            :items="wormCountTicks"
            v-model="maxWormCount"
            @change="selectedMarkerData = null"
          />
        </div>
      </div>
      <div class="position-relative">
        <GmapMap
          class="map-container"
          :center="mapCenter"
          :zoom="4"
          map-type-id="terrain"
          @idle="onMapIdle()"
        >
          <GmapCluster :max-zoom="5" :grid-size="50">
            <GmapMarker
              :position="position"
              :clickable="true"
              @click="onClickMapMarker(position, index)"
              v-for="(position, index) in mapData"
              :key="index"
            />
          </GmapCluster>
        </GmapMap>
        <div class="test-detail" v-if="selectedMarkerData">
          <div class="d-flex mb-4">
            <h3 class="mb-0">{{ selectedMarkerData.address }}</h3>
            <v-spacer />
            <v-icon color="white" @click="selectedMarkerData = null">mdi-close</v-icon>
          </div>
          <p>Test ID: {{ selectedMarkerData.testId }}</p>
          <p>Worm Count: {{ selectedMarkerData.totalWormCount }}</p>
          <p>
            Video Count: {{ selectedMarkerData.videoCount }}
            <a
              href="#"
              v-if="selectedMarkerData.videoCount > 0"
              @click.prevent="$emit('view:videos', selectedMarkerData)"
            >
              (View)
            </a>
          </p>
          <p>
            Tested At:
            {{ selectedMarkerData.createdAt | dateFormatter('YYYY-MM-DD hh:mm:ss A') }}
          </p>
        </div>
        <div class="indicator-container" v-if="status.isLoading">
          <v-progress-circular :size="50" color="white" indeterminate/>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash';

const UNIT = 50;

export default {
