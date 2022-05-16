<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label: string;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <input type="checkbox" name="{{label}}" id="" v-model="value" />
    &nbsp;
    <label for="{{label}}">{{ label }}</label>
  </div>
</template>
