<template>
  <li class="todo-item" :data-checked="checked || null">
    <button
      class="todo-switch"
      @click="$emit('toggle')"
    >
      <CheckIcon class="todo-switch__icon" />
    </button>
    <div class="todo-item__title">{{ title }}</div>
    <button class="icon-static-btn" @click="$emit('remove')">
      <MinusIcon />
    </button>
  </li>
</template>
<script>
  import '../style/todo.css';

  import CheckIcon from '../img/bx-check.svg';
  import MinusIcon from '../img/bx-minus.svg';

  export default {
    emits: ['toggle', 'remove'],
    props: {
      title: String, checked: Boolean
    },
    components: {CheckIcon, MinusIcon}
  }
</script>