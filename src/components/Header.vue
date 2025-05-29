<script setup lang="ts">
import IconInfo from "@/components/icons/IconInfo.vue"
import IconHeart from "@/components/icons/IconHeart.vue";
import IconStats from "@/components/icons/IconStats.vue";
import IconAbout from "@/components/icons/IconAbout.vue";

import AboutModal from "@/components/Modals/AboutModal.vue";
import SupportModal from "@/components/Modals/SupportModal.vue";
import TutorialModal from "@/components/Modals/TutorialModal.vue";
import StatsModal from "@/components/Modals/StatsModal.vue";

const emit = defineEmits(['create-modal']);
</script>

<template>
  <header>
    <div class="max-w-screen-md mx-auto">
      <div class="flex main-container">
        <div class="button-container">
          <button @click="emit('create-modal', AboutModal)">
            <IconInfo/>
          </button>
          <button @click="emit('create-modal', SupportModal)">
            <IconHeart/>
          </button>
        </div>
        <h1 class="flex-grow text-center flex-1">Mario Heardle</h1>
        <div class="button-container justify-end">
          <button @click="emit('create-modal', StatsModal)">
            <IconStats/>
          </button>
          <button @click="emit('create-modal', TutorialModal)">
            <IconAbout/>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    border-style: solid;
    border-color: var(--color-line);
    border-bottom-width: 1px;
  }

  .main-container{
    justify-content: space-evenly;
    color: var(--color-fg);
    padding: 0.75rem;
    align-items: center;
  }

  .button-container {
    display: flex;
    flex: 1 1 0%;

    button{
      border: none;
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 10;
    line-height: 2rem;
    text-align: center;
    flex: 1 1 0%;
  }

  .justify-end {
    justify-content: flex-end;
  }
</style>