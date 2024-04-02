<template>
  <div id="wrapper">
    <Header />
    <AddTodo @add-item="addItem"/>
    <div class="show-todo box">
      <TodoItem
        v-for="todo in items"
        :key="todo.id"
        @switch="switchItem(todo.id)"
        @delete="removeItem(todo.id)"
        v-bind="todo"
      />
    </div>
  </div>
</template>
<script>
  import '../style/general.css';
  import '../style/todo.css';

  import AddTodo from './Add-Todo.vue';
  import TodoItem from './Todo-Item.vue';
  import Header from './Header.vue';

  export default {
    data(){
      return {
        items: [], lastId: 0
      }
    },
    methods: {
      addItem(title){
        this.items.unshift({
          title, status: false, id: this.lastId++
        })
      },
      switchItem(id){
        let todo = this.items.find(item => item.id === id);
        todo.checked = !todo.checked;
      },
      removeItem(id){
        this.items.splice(this.items.findIndex(item => item.id === id), 1)
      }
    },
    components: { Header, AddTodo, TodoItem }
  }
</script>