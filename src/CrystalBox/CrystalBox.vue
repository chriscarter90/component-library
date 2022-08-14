<script lang="ts">
  export default {
    name: 'CrystalBox',
  }
</script>

<template>
  <div class="box">
    <slot />
  </div>
</template>

<style scoped>
.box {
  padding: 1rem;
}
</style>
