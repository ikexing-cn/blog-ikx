export const useCount = defineStore('count', () => {
  let count = $ref<number>(0)

  function decrement() {
    count--
  }

  function increment() {
    count++
  }

  return $$({
    count,
    decrement,
    increment
  })
})
