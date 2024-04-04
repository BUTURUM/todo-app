<template>
  <div class="box show-todo">
    <TabForm v-model="mode">
      <TabOption label="All" value="show-all"/>
      <TabOption label="Active" value="show-active"/>
      <TabOption label="Completed" value="show-completed"/>
    </TabForm>
    <TodoItem
      v-for="({title, checked, id}) in items"
      v-show="mode === 'show-all' || (mode == 'show-completed' ? checked : !checked)"
      :title="title"
      :checked="checked"
      :key="id"

      @toggle="$emit('toggle-id', id)"
      @remove="$emit('remove-id', id)"
    />
  </div>
</template>
<script>
  import '../style/todo.css';

  import TabForm from './Tab-Form.vue';
  import TabOption from './Tab-Option.vue';
  import TodoItem from './Todo-Item.vue';

  export default {
    props: {
      items: Array
    },
    data(){
      return {
        mode: 'show-all'
      }
    },
    watch: {
      ['items.length'](newValue, oldValue){
        if(oldValue < newValue && this.mode == 'show-completed'){
          this.mode = 'show-all';
        }
      }
    },
    components: {TabOption, TodoItem, TabForm }
  }
</script>