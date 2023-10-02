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
          <p>Patient ID: {{ selectedMarkerData.patientId }}</p>
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
  name: 'MapView',
  data() {
    return {
      mapCenter: {
        lat: 3.891300262206071,
        lng: 11.60100792382417,
      },
      selectedMarkerData: null,
      minWormCount: 0,
      maxWormCount: 0,
      status: {
        isLoading: true,
      },
    };
  },
  computed: {
    data() {
      return this.appState.tests;
    },
    filteredData() {
      return this.data.filter((row) => row.latitude && row.longitude
        && row.totalWormCount >= +this.minWormCount
        && (this.maxWormCount === 0 || row.totalWormCount <= +this.maxWormCount));
    },
    wormCountTicks() {
      const max = Math.max(...this.data.map((item) => item.totalWormCount));
      return _.range(0, Math.ceil(max / UNIT + 1) * UNIT, UNIT);
    },
    mapData() {
      return this.filteredData.map((row) => ({
        lat: row.latitude,
        lng: row.longitude,
      }));
    },
  },
    await this.$gmapApiPromiseLazy();
    this.geocoder = new google.maps.Geocoder();
  },
  methods: {
    onMapIdle() {
      this.$set(this.status, 'isLoading', false);
    },
    onClickMapMarker(position, index) {
      this.geocoder.geocode({ location: position }, (results, status) => {
        this.selectedMarkerData = _.cloneDeep(this.filteredData[index]);
        if (status === 'OK') {
          this.selectedMarkerData.address = results[0].formatted_address;
        } else {
          this.selectedMarkerData.address = '';
        }
      });
    },
  },
