<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    offset-y
    :disabled="disabled"
    max-width="290px"
    min-width="290px"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        prepend-inner-icon="mdi-calendar"
        readonly
        :hide-details="hideDetails"
        :label="label"
        :value="formattedDate"
        :rules="rules"
        v-on="on"
      />
    </template>
    <v-date-picker scrollable :value="value" @input="onChangeDate">
      <v-spacer v-if="!required"></v-spacer>
      <v-btn text color="primary" @click="onReset" v-if="!required">Reset</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import moment from 'moment';

export default {
  props: ['label', 'value', 'format', 'rules', 'hideDetails', 'required', 'disabled'],
  computed: {
    formattedDate() {
      if (!this.format || !this.value) return this.value;
      return moment(this.value).format(this.format);
    },
  },
  methods: {
    onChangeDate(date) {
      this.$refs.menu.save(date);
      this.$emit('input', date);
    },
    onReset() {
      this.$refs.menu.save('');
      this.$emit('input', '');
    },
  },
};
</script>
