<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

function updateValue(value: boolean) {
  emit("update:modelValue", value);
}
</script>

<template>
  <div>
    <input
      type="checkbox"
      name="{{label}}"
      id=""
      :checked="modelValue"
      @change="updateValue(($event.target as HTMLInputElement).checked)"
    />
    &nbsp;
    <label for="{{label}}">{{ label }}</label>
  </div>
</template>
