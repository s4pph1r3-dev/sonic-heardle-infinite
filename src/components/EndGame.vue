<script setup lang="ts">

import SoundcloudMusicLink from "@/components/SoundcloudMusicLink.vue";
import GuessSummary from "@/components/GuessSummary.vue";
import InfiniteButton from "@/components/InfiniteButton.vue";
import IconShare from "@/components/icons/IconShare.vue";

import settings from "@/settings/settings.json"

import { currentGameState } from "@/main";
import TransportBar from "@/components/TransportBar.vue";

// calculate time
setInterval(()=>{
  const timer = document.getElementById("timer");

  const tommorowDateFull = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const tommorowDateMidnight = new Date(tommorowDateFull.getFullYear(), tommorowDateFull.getMonth(), tommorowDateFull.getDate(), 0, 0, 0, 0);

  const timeBetween = tommorowDateMidnight.getTime() - new Date().getTime();

  let timeBetweenInSecond = Math.floor(timeBetween/1000)

  if(timeBetweenInSecond <= 0) {
    window.location.reload();
  }

  let hours = 0;
  while(timeBetweenInSecond > (60*60)) {
    hours += 1;
    timeBetweenInSecond -= (60*60);
  }

  let minutes = 0;
  while(timeBetweenInSecond > (60)) {
    minutes += 1;
    timeBetweenInSecond -= (60);
  }

  timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${timeBetweenInSecond.toString().padStart(2, "0")}`;

}, 300);
</script>

<template>
  <div class="max-w-screen-sm main-container">
    <SoundcloudMusicLink :is-won="currentGameState.guessed[currentGameState.guessed.length-1].isCorrect"/>
    <div class="summary-container">
      <p class="guess-number"> {{ currentGameState.guessed[currentGameState.guessed.length-1].isCorrect ? currentGameState.guessed.length.toString() : '0' }} </p>
      <GuessSummary class="summary"/>
      <p class="second-text" v-if="currentGameState.guessed[currentGameState.guessed.length-1].isCorrect"> You got today's {{ settings["heardle-name"] }} Heardle within {{ settings["times"][currentGameState.guessed.length-1] }} seconds. </p>
      <p class="second-text" v-else> You didn't get today's {{ settings["heardle-name"] }} Heardle. Better luck tomorrow! 💎 </p>
      <div class="share flex flex-col justify-center items-center pt-3">
        <button class="border-none font-semibold text-sm svelte-1r54uzk bg-custom-positive">
          Share
          <IconShare class="inline-block ml-2"/>
        </button>
      </div>
    </div>
    <div>
      <div class="timer-container">
        <div class="next-text">The next Mario song starts in:</div>
        <div id="timer">14:25:42</div>
      </div>
      <div class="infinite-button-container">
        <div class="margin"></div>
       <InfiniteButton/>
      </div>
    </div>
  </div>
  <TransportBar/>
</template>

<style scoped>
.main-container{
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  overflow: auto
}

.summary-container {
  text-align: center;
  padding: 0 0.75rem;

  .guess-number {
    font-size: 2.125rem;
    line-height: 1.75rem;

    color: var(--color-lg)
  }
  .summary{
    justify-content: center;
    display: flex;
    margin: 0.5rem 0;
  }
  .second-text {
    padding: 0.25rem 0;
    line-height: 1.75rem;
  }
  .share {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 0.75rem;

    button {
      display: flex;

      align-items: center;

      padding: 0.5rem;
      text-transform: uppercase;

      text-indent: 0.25em;
      letter-spacing: 0.2em;

      font-size: 1.75rem;
      line-height: 1.3rem;

      border: none;

      background-color: var(--color-positive);
    }
  }
}

.infinite-button-container{
  background: var(--color-highlight);
  padding: 0.75rem 0 1.25rem;
  margin: 0 0.75rem;

  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;

  .margin {
    display: flex;
    margin-bottom: 0.75rem;
  }
}

.timer-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.75rem 1.5rem;

  .next-text{
    font-size: 1.75rem;
    line-height: 1.3rem;
    text-align: center;
    color: var(--color-lg);
  }

  #timer {
    text-indent: 0.25em;
    letter-spacing: 0.2em;
    font-size: 2.125rem;
    line-height: 1.75rem;
  }
}
</style>