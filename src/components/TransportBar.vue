<script setup lang="ts">
import settings from "@/settings/settings.json"
import {onMounted} from "vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import IconVolume from "@/components/icons/IconVolume.vue";

onMounted(()=>{
  const bar = document.getElementById("bar");

  const lastChild = bar.lastChild;
  bar.removeChild(lastChild);

  for(let i = 0; i < settings["guess-number"]; i++){
    const el = document.createElement("div");
    el.classList.add("separator");
    if(i == 0) {
      el.classList.add("sep-selected");
    }
    el.style.setProperty("left", settings["separator"][i] + "%");

    bar.appendChild(el);
  }

  bar.appendChild(lastChild);
})

function Play(){
  const button = document.getElementById("play-button");
}
</script>

<template>
  <!-- PlayBar -->
  <div class="playbar">
    <div class="max-w-screen-sm bar-grid-container">
      <div class="bar-grid">
        <div id="unlocked-bar" style="width: 8%">
          <div class="seekbar" style="width: 20%;"></div>
        </div>
        <div id="bar">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Button -->
  <div class="transport">
    <div class="max-w-screen-sm">
      <div class="transport-container">
        <div class="container with-volume">
          <div class="item1">0:00</div>
          <div class="item2">
            <button>
              <IconVolume/>
            </button>
            <div class="volume-control">
              <div class="slider" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" tabindex="0">
                <div class="slider-fill" style="width: 50%;"></div>
                <div class="slider-thumb" style="left: 50%;"></div>
              </div>
            </div>
          </div>
          <div class="item3">
            <button id="play-button" @click="Play">
              <div class="border">
                <div class="icon ml-1 relative z-10">
                  <IconPlay/>
                </div>
              </div>
            </button>
          </div>
          <div class="item4">0:25</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.playbar {
  border-color: var(--color-line);
  border-top-width: 1px;
}

.seekbar {
  background-color: var(--color-positive);
  height: 100%;
  position: absolute;
}

.bar-grid-container {
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  width: 100%;
  margin-left: auto;
  margin-right: auto;

  .bar-grid{
    overflow: hidden;
    width: 100%;
    height: 0.75rem;
    position: relative;

    #unlocked-bar{
      background-color: var(--color-mg);
      overflow: hidden;
      height: 100%;
      position: absolute;
    }

    #bar {
      width: 100%;
      height: 100%;
      position: absolute;

      :first-child {
        background-color: var(--color-line);
        width: 1px;
        height: 100%;
        right: 0px;

        position: absolute;
      }

      :last-child{
        background-color: var(--color-mg);
        width: 1px;
        height: 100%;
        right: 0px;

        position: absolute;
      }
    }
  }
}

.transport{
  border-color: var(--color-line);
  border-top-width: 1px;

  width: 100%;

  .max-w-screen-sm{
    margin-left: auto;
    margin-right: auto;
  }

  .transport-container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

.container.with-volume {
  grid-template-columns: 3fr 4fr 7fr 7fr;
}

.container {
  display: grid;
  grid-template-columns: 3fr 4fr 7fr 7fr;
  gap: 10px;
  align-items: center;
}

.item1 {
  align-items: center;
  display: flex;
}
.item2 {
  display: flex;
  align-items: center;

  button {
    margin-right: 15px;
    border: none;
  }

  .volume-control{
    width: 100px;
    position: relative;

    .slider{
      position: relative;
      height: 10px;
      background-color: grey;
      border-radius: 2px;
      cursor: pointer;

      .slider-fill{
        position: absolute;
        height: 100%;
        background-color: white;
        border-radius: 2px;
      }

      .slider-thumb{
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: white;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
.item3 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  justify-self: center;
}
.item4{
  justify-self: right;
}

#play-button{
  padding: 0.5rem;
  text-transform: uppercase;

  text-indent: 0.25em;
  letter-spacing: 0.2em;

  font-weight: 10;

  font-size: 1.75rem;
  line-height: 1.3rem;

  border-style: none;

  align-items: center;
  display: flex;

  .border {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-fg);

    height: 3.5rem;
    width: 3.5rem;

    border-width: 2px;

    border-radius: 9999px;

    position: relative;

    overflow: hidden;

    .icon{
      margin-right: 0.25rem;
      z-index: 10;
      position: relative;
    }
  }
}

</style>

<style>
.separator {
  background-color: var(--color-mg);
  width: 1px;
  height: 100%;
  position: absolute;
}

.sep-selected{
  background-color: var(--color-line);
}
</style>