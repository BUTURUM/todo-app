<template>
  <div class="todo-item" :data-checked="checked || null">
    <Checkbox @switch="$emit('switch')"/>
    <div class="todo-item__title">{{ title }}</div>
  </div>
</template>
<script>
  import '../style/todo.css';

  import Checkbox from './Checkbox.vue'

  export default {
    props: {
      title: String, checked: Boolean
    },
    components: {Checkbox}
  }
</script>