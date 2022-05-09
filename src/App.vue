<script setup lang="ts">
import { computed, ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import CheckBox from "./components/CheckBox.vue";
import { generatePassword } from "./util/passwordGenerator";
import NumberInput from "./components/NumberInput.vue";
const length = ref(20);
const lowercase = ref(true);
const uppercase = ref(true);
const number = ref(true);
const specialChar = ref(true);
const generated = computed(() => {
  return generatePassword(
    length.value,
    lowercase.value,
    uppercase.value,
    number.value,
    specialChar.value
  );
});
</script>

<template>
  <div
    class="flex justify-center items-center min-h-screen flex-col gap-4 bg-zinc-500"
  >
    <AppHeader title="Password Generator" />
    {{ generated }}
    <div>
      <NumberInput v-model="length" label="Length" />
      <CheckBox v-model="lowercase" label="Lowercase" />
      <CheckBox v-model="uppercase" label="Uppercase" />
      <CheckBox v-model="number" label="Number" />
      <CheckBox v-model="specialChar" label="Special Character" />
    </div>
  </div>
</template>
