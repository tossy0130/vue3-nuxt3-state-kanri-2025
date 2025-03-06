<script setup>

import { useCounterStore } from './stores/counter.ts'
import CounterComp from './components/CounterComp.vue'

const counterStore = useCounterStore()
console.log(counterStore.count)
</script>


<template>
  <h1>Pinia 呼び出し</h1>

  <button @click="counterStore.count++">1</button>

  <button @click="counterStore.increment">3</button>

  <p>{{ counterStore.count }}</p>
  <p>{{ counterStore.doublecount }}</p>
  <p>{{ counterStore.count2 }}</p>


  <!-- components/CounterComp.vue  -->
   <CounterComp />
</template>
./stores/counter.ts
