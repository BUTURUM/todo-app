<template>
  <div class="todo-item" :data-checked="checked || null">
    <Checkbox @switch="$emit('switch')"/>
    <div class="todo-item__title">{{ title }}</div>
    <button class="icon-btn" @click="$emit('delete')">
      <img :src="crossUrl">
    </button>
  </div>
</template>
<script>
  import '../style/todo.css';

  import Checkbox from './Checkbox.vue';
  import crossUrl from '../img/icon-cross.svg?url';

  export default {
    props: {
      title: String, checked: Boolean
    },
    data(){
      return { crossUrl }
    },
    components: {Checkbox}
  }
</script>