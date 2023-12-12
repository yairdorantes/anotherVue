<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../context/pinia";
const store = useCounterStore();
console.log(store);
const { count, name } = storeToRefs(store);
const { increment, changeName } = store;
function changeValue() {
  changeName("spider man");
}
</script>

<template>
  <h1>hello world motherfucker test</h1>
  <h1>{{ name }}</h1>
  <button class="btn" @click="changeValue">write</button>
</template>
