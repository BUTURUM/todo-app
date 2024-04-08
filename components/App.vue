<template>
  <div id="wrapper">
    <Header />
    <AddTodo @add-item="addItem"/>
    <TodoList
      :items="storage.items" @toggle-id="toggleItem" @remove-id="removeItem"
    />
  </div>
</template>
<script setup>
  import { reactive } from 'vue';
  import useStorage from '../useStorage.js';

  import '../style/general.css';
  import '../style/todo.css';

  import AddTodo from './Add-Todo.vue';
  import Header from './Header.vue';
  import TodoList from './Todo-List.vue';

  function addItem(title){
    storage.items.unshift({
      title, checked: false, id: storage.lastId++
    });
  }
  function toggleItem(id){
    let todo = storage.items.find(item => item.id === id);
    todo.checked = !todo.checked;
  }
  function removeItem(id){
    storage.items.splice(storage.items.findIndex(item => item.id === id), 1);
  }

  let storage = reactive(useStorage('storage', {items: [], lastId: 0}, function validator(object){
    return (
      typeof object === 'object' && object && Array.isArray(object.items) && typeof object.lastId === 'number'
    )
  }).value);
</script>