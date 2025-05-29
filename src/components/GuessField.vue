<script setup lang="ts">
const props = defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <div :class="'parent ' + (active ? 'active' : '')">
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.active {
  border-color: var(--color-line) !important;
}

.parent {
  display: flex;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-width: 1px;
  align-items: center;
  border-color: var(--color-mg);
  div {
    height: 1.25rem;
    width: 1.25rem;
  }
}
</style>