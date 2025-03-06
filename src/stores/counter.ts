import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 登録
export const useCounterStore = defineStore('counter', () => {

  // ref　ステート
  const count = ref(0)
  const count2 = ref(0)

  // computed  ゲッター
  const doublecount = computed(() => count.value * 2)

  // function　アクション
  const increment = () => {
    count2.value+=3
  }

  return {
    count,
    count2,
    doublecount,
    increment
  }
})
