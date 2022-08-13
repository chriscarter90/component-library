<script lang="ts">
  export default {
    name: 'CrystalStack',
  }
</script>

<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
}
.stack > ::deep(* + *) {
  margin-top: 1rem;
}
</style>
