<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  document.getElementById("modal-title").innerHTML = "About";
})
</script>

<template>
  <p>Mario Heardle is a version of Heardle that features songs from across the entire Mario franchise.</p>
  <p>Volume Slider and Scroll Bar code by <a href="https://github.com/morgvanny">morgvanny</a>.</p>
  <p>Metadata code by <a href="https://www.fiverr.com/gema_designer">gema_designer</a>.</p>
  <p>The full list of songs is available <a href="https://docs.google.com/spreadsheets/d/12vCtRU4cKzgTZk60kVveHRxQvdC2u0yS5pEISWeDlZo/edit#gid=0">here.</a> </p>
  <p> If you have any technical issues, you can contact me @NinjiGalaxy on Bluesky, or by commenting on the previously linked Google Sheet. </p>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}
</style>