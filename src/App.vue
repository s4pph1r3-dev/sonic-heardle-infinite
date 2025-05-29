<script setup>
// Component imports
import Header from "@/components/Header.vue";
import ModalBase from "@/components/Modals/ModalBase.vue";
import {onMounted, onBeforeUnmount, ref, shallowRef} from "vue";
import TutorialModal from "@/components/Modals/TutorialModal.vue";

// Vue Binding References
const style = ref("height:" + window.innerHeight + "px;")
const showModal = ref(false);
const currentModal = shallowRef(null);

// Setting Manager
import themes from '@/settings/themes.json'
import settings from "@/settings/settings.json"
import GuessField from "@/components/GuessField.vue";
import TransportBar from "@/components/TransportBar.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import GuessBar from "@/components/GuessBar.vue";

// CSS Variables
const colors = {};

// Modal function
function openModal(modalComponent) {
  currentModal.value = modalComponent;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
}

onMounted(() => {
  window.addEventListener('resize', ()=>style.value = "height:" + window.innerHeight + "px;");

  let r = document.querySelector(':root');

  for (let theme in themes) {
    if(theme === "!COMMENT!") continue;

    let colorKey = "--color-"+theme;

    let value = themes[theme]["value"];
    if(themes[theme]["type"] === "url") value = "url('" + value + "')";
    if(themes[theme]["type"] === "var") value = "var(" + "--color-"+value + ")";

    console.log(colorKey);

    r.style.setProperty(colorKey, value);
  }

  if(window.localStorage.getItem('firstPlay') !== "false"){
    openModal(TutorialModal);
    window.localStorage.setItem('firstPlay', 'false');
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', ()=>style.value = "height:" + window.innerHeight + "px;");
});

</script>

<template>
  <main id='main' :style="style">
    <ModalBase v-if="showModal" @close="closeModal">
      <component :is="currentModal" />
    </ModalBase>
    <div class="no-flex">
      <Header @create-modal="(modal)=>openModal(modal)"/>
    </div>
    <div class="game-container">
      <div class="max-w-screen-sm">
        <div class="guess-container">
          <template v-for="n in settings['guess-number']">
            <GuessField :active="(n === 1)"/>
          </template>
        </div>
      </div>
    </div>
    <div class="list-text">
      <p>
        <a href="https://docs.google.com/spreadsheets/d/12vCtRU4cKzgTZk60kVveHRxQvdC2u0yS5pEISWeDlZo/edit#gid=0">
          Click Here for the full list of {{ settings["heardle-name"] }} Heardle songs. <br/>
          <IconArrowDown class="arrow"/>
        </a>
      </p>
    </div>
    <TransportBar/>
    <GuessBar/>
  </main>
</template>

<style scoped lang="scss">
main {
  background: var(--color-bg);
  color: var(--color-fg);

  overflow: auto;

  display: flex;

  flex-direction: column;
}
.game-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  .max-w-screen-sm {
    width: 100%;
    height: 100%;

    overflow: auto;
    justify-content: space-between;

    margin-left : auto;
    margin-right : auto;
    flex-direction: column;
  }
}
.guess-container {
  padding: 0.75rem;
}
.no-flex {
  flex: none;
}

.list-text{
  font-size: 1.75rem;
  line-height: 1.3rem;

  text-align: center;

  padding: 0.75rem;
  align-items: center;
  flex-direction: column;
  display: flex;

  a {
    color: var(--color-link);
  }

  svg{
    margin-top: 0.5rem;
  }
}

.arrow {
  margin-top: 0.5rem;
}
</style>
