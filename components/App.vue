<template>
  <div id="wrapper">
    <Header></Header>
    <AddTodo @add-item="console.log($event)"/>
  </div>
</template>
<script>
  import '../style/general.css';
  import AddTodo from './Add-Todo.vue';

  import Header from './Header.vue';

  export default {
    components: { Header, AddTodo }
  }
</script>