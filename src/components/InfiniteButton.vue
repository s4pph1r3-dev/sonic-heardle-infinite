<script setup lang="ts">

import IconInfinite from "@/components/icons/IconInfinite.vue";
import settings from "@/settings/settings.json"

import {ParseStringWithVariable} from "@/main";
</script>

<template>
  <div v-if="settings['variant-link'] !== '' && settings['variant-link'] !== null && settings['variant-link'] !== undefined">
    <a :href="settings['variant-link']" title="Mario Heardle Infinite">
      <span>
        <IconInfinite/> {{ ParseStringWithVariable(settings["phrases"]["infinite-pub-text"]) }}
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