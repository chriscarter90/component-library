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

<style lang="scss" scoped>
.box {
  padding: 1rem;
}
</style>
