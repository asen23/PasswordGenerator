<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label: string;
  modelValue: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: number) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <label for="{{label}}">{{ label }}</label>
    &nbsp;
    <input
      type="number"
      name="{{label}}"
      min="1"
      id=""
      v-model="value"
      class="rounded-sm px-2 text-black"
    />
  </div>
</template>
