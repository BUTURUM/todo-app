<template>
  <button
    class="todo-switch"
    @click="$emit('toggle')"
  >
    <img class="todo-switch__icon" :src="iconUrl">
  </button>
</template>
<script>
  import '../style/todo.css';
  import iconUrl from '../img/icon-check.svg?url';

  export default {
    data(){
      return { iconUrl }
    }
  }
</script>