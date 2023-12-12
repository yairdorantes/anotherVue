<script setup>
import { computed, ref } from "vue";

const currentValue = ref("");
const tags = ref([]);

function handleValue(e) {
  const value = e.target.value;
  const exists = tags.value.some((item) => item === value);
  value !== "" && !exists && tags.value.push(value);
  currentValue.value = "";
}
function delTag(tag) {
  tags.value = tags.value.filter((item) => item !== tag);
}
function handleKeyDown(e) {
  if (e.key === "Backspace" && currentValue.value === "") {
    tags.value.pop();
  }
}
const tagsWatcher = computed(() => {
  // console.log(tags.value);
  return tags.value.length;
});
</script>

<template>
  <h1>first test</h1>
  <div class="input-tag flex border-2 border-sky-100">
    <div class="tags flex gap-3 p-1">
      <!-- {{ tagsWatcher }} -->
      <div
        class="flex gap-2 bg-info items-center text-black p-1 rounded-lg"
        v-for="(tag, i) in tags"
        :key="i"
      >
        {{ tag }}
        <button @click="delTag(tag)" class="hover:bg-error p-2 rounded-sm">
          x
        </button>
      </div>
    </div>

    <input
      v-model="currentValue"
      type="text"
      @keydown="handleKeyDown"
      @keyup.enter="handleValue"
      class="border-none outline-none p-2 bg-none"
    />
  </div>
</template>
