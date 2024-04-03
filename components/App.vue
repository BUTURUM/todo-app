<template>
  <div id="wrapper">
    <Header />
    <AddTodo @add-item="addItem"/>
    <TodoList
      :items="items" @toggle-id="toggleItem" @remove-id="removeItem"
    />
  </div>
</template>
<script>
  import '../style/general.css';
  import '../style/todo.css';

  import AddTodo from './Add-Todo.vue';
  import Header from './Header.vue';
  import TodoList from './Todo-List.vue';

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
        });
      },
      toggleItem(id){
        let todo = this.items.find(item => item.id === id);
        todo.checked = !todo.checked;
      },
      removeItem(id){
        this.items.splice(this.items.findIndex(item => item.id === id), 1);
      }
    },
    components: { Header, AddTodo, TodoList }
  }
</script>