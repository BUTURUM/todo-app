<template>
  <div class="tab-form">
    <slot></slot>
  </div>
</template>
<script>
  import { computed } from 'vue';
  import '../style/tabs.css';

  export default {
    props: {
      modelValue: String
    },
    methods: {
      switchTo(value){
        this.$emit('update:modelValue', value);
      }
    },
    provide(){
      return {
        current: computed(() => this.modelValue), switchTo: this.switchTo
      }
    }
  }
</script>