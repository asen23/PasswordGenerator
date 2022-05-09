<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: number;
}>();

const emit = defineEmits(["update:modelValue"]);

function updateValue(value: string) {
  const num = parseInt(value);
  emit("update:modelValue", isNaN(num) ? 20 : num);
}
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
      :value="modelValue"
      @input="updateValue(($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
