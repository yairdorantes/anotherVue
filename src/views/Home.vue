<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../context/pinia";
const store = useCounterStore();
const { count, name, doubleCount, isEven, list, filtered } = storeToRefs(store);
const { increment, changeName } = store;
function changeValue() {
  changeName("yair");
}
</script>

<template>
  <h1>homeeee</h1>
  <h2>{{ count }}</h2>
  <h3>{{ name }}</h3>
  <h4>{{ doubleCount }}</h4>
  <h5>{{ isEven }}</h5>
  <div>original {{ list }}</div>
  <div>modifed {{ filtered }}</div>
  <button @click="console.log(count)" class="btn btn-secondary">another</button>
  <button @click="changeValue" class="btn">change name</button>
  <button @click="increment" class="btn btn-primary">btn</button>
  <!-- <button @click="doubleCount" class="btn">mutliply</button> -->
  <router-link to="/test">
    <a href="" class="link link-secondary">Link</a>
  </router-link>
</template>
