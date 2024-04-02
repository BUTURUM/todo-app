<template>
  <div id="wrapper">
    <Header />
    <AddTodo @add-item="addItem"/>
    <TabForm v-model="mode">
      <TabOption label="All" value="show-all"/>
      <TabOption label="Active" value="show-active"/>
      <TabOption label="Completed" value="show-completed"/>
    </TabForm>
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
  import TabForm from './Tab-Form.vue';
  import TabOption from './Tab-Option.vue';

  export default {
    data(){
      return {
        items: [], mode: 'show-all', lastId: 0
      }
    },
    methods: {
      addItem(title){
        this.items.unshift({
          title, status: false, id: this.lastId++
        });
      },
      switchItem(id){
        let todo = this.items.find(item => item.id === id);
        todo.checked = !todo.checked;
      },
      removeItem(id){
        this.items.splice(this.items.findIndex(item => item.id === id), 1);
      }
    },
    components: { Header, AddTodo, TodoItem, TabOption, TabForm, TabForm }
  }
</script>