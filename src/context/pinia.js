import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(1);
  const name = ref("Eduardo");
  const doubleCount = computed(() => count.value * 2);
  const isEven = computed(() => count.value % 2 === 0);
  const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  const filtered = computed(() => {
    return list.value.filter((item) => item !== count.value);
  });
  function increment() {
    count.value++;
  }
  function changeName(newName) {
    name.value = newName;
  }
  return {
    count,
    name,
    doubleCount,
    increment,
    changeName,
    isEven,
    list,
    filtered,
  };
});
