<template>
  <form class="add-todo box" @submit.prevent="submit">
    <div class="add-todo__figure"></div>
    <input
      class="add-todo__input"
      placeholder="Create Todo..."
      type="text"
      v-model="title"
    >
  </form>
</template>
<script>
  import '../style/todo.css';

  export default {
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
    }
  }
</script>