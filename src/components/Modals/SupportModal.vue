<script setup lang="ts">
import {onMounted} from "vue";
import settings from "@/settings/settings.json"
import IconInfinite from "@/components/icons/IconInfinite.vue";
import InfiniteButton from "@/components/InfiniteButton.vue";

onMounted(()=>{
  document.getElementById("modal-title").innerHTML = "Support";
})
</script>

<template>
  <p>Have questions/run into bugs? Tweet/DM me @NinjiGalaxy on Discord or Bluesky.</p>
  <p></p>
  <div class="infinite-container">
    <InfiniteButton/>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}

.infinite-container {
  padding: 1.5rem;
}
</style>