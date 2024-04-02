<template>
  <a class="tab-option" @click.prevent="switchTo(value)" :data-current="active || null">
    {{ label }}
  </a>
</template>
<script>
  import '../style/tabs.css';

  export default {
    props: {
      label: String, value: String
    },
    computed: {
      active(){
        return this.current == this.value
      }
    },
    inject: ['current', 'switchTo']
  }
</script>