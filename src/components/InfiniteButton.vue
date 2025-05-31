<script setup lang="ts">

import IconInfinite from "@/components/icons/IconInfinite.vue";
import settings from "@/settings/settings.json"
</script>

<template>
  <div>
    <a href="https://mario-heardle-infinite.glitch.me/" title="Mario Heardle Infinite">
      <span>
        <IconInfinite/> Click here to play <p></p> {{ settings["heardle-name"] }} Heardle Infinite!
      </span>
    </a>
  </div>
</template>

<style scoped>
div {
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

a {
  background-color: var(--color-button-highlight);
  text-decoration: none;
  color: var(--color-fg);

  padding: 0.5rem 0.75rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
}
</style>