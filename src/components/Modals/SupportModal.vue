<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  document.getElementById("modal-title").innerHTML = "Support";
})
</script>

<template>
  <p class="mb-3">Have questions/run into bugs? Tweet/DM me @NinjiGalaxy on Discord or Bluesky.</p>
  <p class="mb-3"></p>
  <div class="infinite-container">
    <div>
      <a class="kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1d3p4dy" href="https://mario-heardle-infinite.glitch.me/" title="Mario Heardle Infinite">
        <span class="kofitext svelte-1d3p4dy"><img src="https://i.imgur.com/uuaLiEE.png" alt="Mario Heardle Infinite" class="kofiimg mr-2 mb-1 svelte-1d3p4dy">Click here to play<p></p>Mario Heardle Infinite!</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}

.infinite-container {
  padding: 1.5rem;
}

.infinite-container div {
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

a {
  background-color: rgb(41, 171, 224) !important;
  text-decoration: none;
  color: var(--color-fg);

  padding: 0.5rem 0.75rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
}

img {
  height: 30px !important;
  width: 30px !important;
  display: initial;
  -webkit-animation: wiggle 2s infinite;
  animation: wiggle 2s infinite;

  margin-bottom: 0.25rem;
  margin-right: 0.5rem;

  max-width: 100%;
  vertical-align: middle;

  border-style: solid;
}

@keyframes wiggle {
  0% {
    transform: rotate(0) scale(1)
  }
  60% {
    transform: rotate(0) scale(1)
  }
  75% {
    transform: rotate(0) scale(1.12)
  }
  80% {
    transform: rotate(0) scale(1.1)
  }
  84% {
    transform: rotate(-10deg) scale(1.1)
  }
  88% {
    transform: rotate(10deg) scale(1.1)
  }
  92% {
    transform: rotate(-10deg) scale(1.1)
  }
  96% {
    transform: rotate(10deg) scale(1.1)
  }
  100% {
    transform: rotate(0) scale(1)
  }
}
</style>