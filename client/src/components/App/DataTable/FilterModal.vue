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
            v-for="(filterGroup, groupIndex) in filterGroups"
            :key="`filter-group-${groupIndex}`"
          >
            <v-card class="px-6 py-4">
              <div
                v-for="(filter, filterIndex) in filterGroup"
                :key="`filter-${filterIndex}`"
              >
                <div class="d-flex">
                  <div>
                    <div class="d-flex">
                      <div>
                        <v-select
                          label="Column"
                          :items="columns"
                          :rules="getValidators('Column', ['required'])"
                          v-model="filter.column"
                          @change="onChangeColumn(groupIndex, filterIndex)"
                        />
                      </div>
                      <div class="ml-2">
                        <v-select
                          label="Condition"
                          :items="getColumnConditions(filter.column)"
                          :rules="getValidators('Condition', ['required'])"
                          v-model="filter.condition"
                          @change="onChangeCondition(groupIndex, filterIndex)"
                        />
                      </div>
                    </div>
                    <div class="d-flex" v-if="getColumnType(filter.column) === 'string'">
                      <div
                        v-if="['eq', 'substring', 'startsWith', 'endsWith']
                          .includes(filter.condition)"
                      >
                        <v-text-field
                          label="Value"
                          :rules="getValidators('Value', ['required'])"
                          v-model="filter.value"
                        />
                      </div>
                      <div v-if="['in'].includes(filter.condition)">
                        <v-combobox
                          label="Value"
                          multiple
                          append-icon
                          chips
                          deletable-chips
                          :rules="getValidators('Value', ['required'])"
                          v-model="filter.value"
                        />
                      </div>
                    </div>
                    <div class="d-flex" v-if="getColumnType(filter.column) === 'number'">
                      <div
                        v-if="['eq', 'gt', 'lt']
                          .includes(filter.condition)"
                      >
                        <v-text-field
                          type="number"
                          label="Value"
                          :rules="getValidators('Value', ['required'])"
                          v-model="filter.value"
                        />
                      </div>
                      <div v-if="['between'].includes(filter.condition)">
                        <v-text-field
                          type="number"
                          :rules="getValidators('From', ['required'])"
                          v-model="filter.from"
                        />
                      </div>
                      <div class="ml-2" v-if="['between'].includes(filter.condition)">
                        <v-text-field
                          type="number"
                          label="To"
                          :rules="getValidators('To', ['required'])"
                          v-model="filter.to"
                        />
                      </div>
                    </div>
                    <div class="d-flex" v-if="getColumnType(filter.column) === 'date'">
                      <div
                        v-if="['gt', 'lt']
                          .includes(filter.condition)"
                      >
                        <v-date-picker2
                          label="Value"
                          :rules="getValidators('Value', ['required'])"
                          v-model="filter.value"
                        />
                      </div>
                      <div v-if="['between'].includes(filter.condition)">
                        <v-date-picker2
                          label="From"
                          :rules="getValidators('From', ['required'])"
                          v-model="filter.from"
                        />
                      </div>
                      <div class="ml-2" v-if="['between'].includes(filter.condition)">
                        <v-date-picker2
                          label="To"
                          :rules="getValidators('To', ['required'])"
                          v-model="filter.to"
                        />
                      </div>
                    </div>
                  </div>
                  <v-spacer />
                  <v-btn-toggle class="mt-5">
                    <v-btn small @click="onAddFilterGroup(groupIndex)">AND</v-btn>
                    <v-btn small @click="onAddFilter(groupIndex, filterIndex)">OR</v-btn>
                    <v-btn small @click="onRemoveFilter(groupIndex, filterIndex)">-</v-btn>
                  </v-btn-toggle>
                </div>
                <div class="d-flex align-center my-2" v-if="filterIndex < filterGroup.length - 1">
                  <hr class="or-divider" />
                  <div class="px-4 blue--text">OR</div>
                  <hr class="or-divider" />
                </div>
              </div>
            </v-card>
            <div class="d-flex align-center my-2" v-if="groupIndex < filterGroups.length - 1">
              <hr class="and-divider" />
              <div class="px-4 red--text">AND</div>
              <hr class="and-divider" />
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import _ from 'lodash';
import VDatePicker2 from '@/components/App/VDatePicker2.vue';

export default {
  name: 'FilterModal',
  components: {
    VDatePicker2,
  },
