<template>
  <VueDatePicker v-model="month" month-picker close-on-scroll auto-apply :start-date="startDate"
    :close-on-auto-apply="true" :max-date="new Date()" :format="format">
    <template #month="{ value }">
      {{ value }}
    </template>
  </VueDatePicker>

  
</template>

<script setup>
import { ref } from 'vue';

const month = ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});
const startDate = ref(new Date());

const format = (date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}년 ${month}월`;
};
</script>
