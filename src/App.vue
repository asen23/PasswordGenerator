<script setup lang="ts">
import { computed, ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import CheckBox from "./components/CheckBox.vue";
import NumberInput from "./components/NumberInput.vue";
import { generatePassword } from "./util/passwordGenerator";

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

const copyPassword = () => {
  navigator.clipboard.writeText(generated.value);
};
</script>

<template>
  <div
    class="flex justify-center items-center min-h-screen flex-col gap-4 bg-cyan-900 text-white"
  >
    <AppHeader title="Password Generator" />
    <div class="bg-black rounded-md p-4 relative group max-w-[50%] break-words">
      {{ generated }}
      <button
        class="bg-gray-900 absolute right-1 top-1 p-1 rounded-md border border-gray-500 text-[0.5rem] hidden group-hover:block"
        @click="copyPassword"
      >
        Copy
      </button>
    </div>
    <div>
      <NumberInput v-model="length" label="Length" />
      <CheckBox v-model="lowercase" label="Lowercase" />
      <CheckBox v-model="uppercase" label="Uppercase" />
      <CheckBox v-model="number" label="Number" />
      <CheckBox v-model="specialChar" label="Special Character" />
    </div>
  </div>
</template>
