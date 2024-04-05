<template>
  <form class="box" @submit.prevent="submit">
    <label class="add-todo">
      <div class="add-todo__figure"></div>
      <input
        class="add-todo__input"
        placeholder="Create Todo..."
        type="text"
        v-model="title"
      >
      <button class="icon-animated-btn" type="submit">
        <PlusIcon />
      </button>
    </label>
  </form>
</template>
<script>
  import '../style/todo.css';

  import PlusIcon from '../img/bx-plus.svg';

  export default {
    emits: ['add-item'],
    methods: {
      submit(){
        if(!this.title.length){
          return
        }
        this.$emit('add-item', this.title);
        this.title = '';
      }
    },
    data(){
      return {title: ''}
    },
    components: {PlusIcon}
  }
</script>