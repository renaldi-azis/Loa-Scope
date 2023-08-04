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
                          label="From"
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
