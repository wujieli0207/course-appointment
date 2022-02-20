<template>
  <div>
    <view>已有:{{ existCount }} 条</view>
    <view>新增:{{ count }} 条,共有{{ total }} 条</view>
    <button @tap="increment">新增</button>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";
  import "./index.scss";

  const count = ref(0);
  const existCount = ref(4);
  const total = computed(() => {
    return count.value + existCount.value;
  });

  function increment() {
    count.value += 1;
  }
</script>
