<style scoped>
  .header{
    margin-bottom: 3rem;
    margin-top: 1rem;
    align-items: center;
    display: flex;
  }
  .header__title{
    color: var(--bright-color);
    letter-spacing: .5em;
    flex: 1;
    user-select: none;
  }
  .header__icon{
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
    fill: var(--bright-color);
  }
</style>
<template>
  <div class="header">
    <h1 class="header__title">TODO</h1>
    <button @click="themePreference = !themePreference">
      <MoonIcon v-if="themePreference" class="header__icon"/>
      <SunIcon v-else class="header__icon"/>
    </button>
  </div>
</template>
<script setup>
  import { watch, ref } from 'vue';

  import MoonIcon from '../img/bxs-moon.svg';
  import SunIcon from '../img/bxs-sun.svg';

  const themeQuery = window.matchMedia('(prefers-color-scheme: light)'), themePreference = ref(themeQuery.matches);

  themeQuery.addEventListener('change', (event) => {
    themePreference.value = event.matches;
  });

  watch(themePreference, (newValue) => {
    document.documentElement.classList.toggle('dark-theme', !newValue);
  }, {
    immediate: true
  });
</script>