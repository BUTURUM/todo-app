<template>
  <div class="todo-item" :data-checked="checked || null">
    <button
      class="todo-switch"
      @click="$emit('toggle')"
    >
      <img class="todo-switch__icon" :src="checkUrl">
    </button>
    <div class="todo-item__title">{{ title }}</div>
    <button class="icon-btn" @click="$emit('remove')">
      <img :src="crossUrl">
    </button>
  </div>
</template>
<script>
  import '../style/todo.css';

  import checkUrl from '../img/icon-check.svg?url';
  import crossUrl from '../img/icon-cross.svg?url';

  export default {
    emits: ['toggle', 'remove'],
    props: {
      title: String, checked: Boolean
    },
    data(){
      return { crossUrl, checkUrl }
    }
  }
</script>