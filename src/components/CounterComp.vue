<script setup>

import { useCounterStore } from '../stores/counter.ts'

const counterStore = useCounterStore()
console.log(counterStore.count)
</script>


<template>
  <h1>components/CounterComp.vue</h1>

  <button @click="counterStore.count++">1</button>

  <p>{{ counterStore.count }}</p>
</template>
../stores/counter.ts
