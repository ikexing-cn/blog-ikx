<script lang="ts" setup>
const { increment, decrement, count } = $(useCount())
</script>

<template>
  <div>hello world</div>
  <div class="use-count">
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrement">-</button>
  </div>
</template>

<style lang="postcss" scoped>
.use-count {
  display: inline;
}
</style>
