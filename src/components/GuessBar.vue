<script setup lang="ts">

import IconMagnifyingGlass from "@/components/icons/IconMagnifyingGlass.vue";
import IconCancel from "@/components/icons/IconCancel.vue";
</script>

<template>
  <div class="max-w-screen-sm base-container">
    <div class="container">
      <div>
        <div id="autocomplete-wrapper">
          <IconMagnifyingGlass class="glass"/>
          <input class="" id="autoComplete" type="search" dir="ltr" spellcheck="false" autocorrect="off" autocomplete="off" autocapitalize="none" aria-controls="autoComplete_list_1" aria-autocomplete="both" placeholder="Know it? Search for the game / title" role="combobox" aria-owns="autoComplete_list_1" aria-haspopup="true" aria-expanded="false">
          <ul id="autoComplete_list_1" role="listbox" hidden=""></ul>
          <div class="close">
            <IconCancel/>
          </div>
        </div>
        <div class="button-container">
          <button class="skip   svelte-1r54uzk">
            Skip <span class="tracking-normal lowercase">(+1s)</span>
          </button>
          <button class="submit svelte-1r54uzk">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.base-container{
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.container{
  margin: 0 0.75rem 0.75rem;
}

#autocomplete-wrapper{
  position: relative;

  input {
    background: var(--color-bg);
    color: var(--color-fg);
    border-color: var(--color-mg);

    padding: 0.75rem 0.75rem 0.75rem 2.25rem;

    outline-offset: -2px;

    width: 100%;

    font-family: inherit;
    font-size: 1.5rem;

    /*focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg*/
    &:focus{
      outline: none;
      border-color: var(--color-positive);
    }

    &::placeholder {
      color: var(--color-line);
    }
  }
}

.close {
  position: absolute;
  right: 0.75rem;
  top: 1rem;
}

.glass {
  position: absolute;
  left: 0.75rem;
  top: 1rem;
}

.button-container{
  padding-top: 0.75rem;
  justify-content: space-between;
  display: flex;

  button {
    display: flex;

    padding: 0.5rem;
    text-transform: uppercase;

    letter-spacing: 0.2em;

    border: none;

    align-items: center;
    font-weight: 10;

    font-size: 1.75rem;
    line-height: 1.3rem;

    &.skip{
      background: var(--color-mg);
    }
    &.submit{
      background: var(--color-positive);
    }
  }

}
</style>