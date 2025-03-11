<template>
  <div>one more step</div>
  <div class="name">
    {{ name }}
  </div>
  <input v-bind:type="type" :value="name">
  <button class="btn btn-primary" @click="updateName">Click</button>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup() {
      const name = ref('hyunsuk');
      const type = ref('number');

      const updateName = () => {
        name.value = 'hyunsuk1111';
        type.value = 'text';
      }

      return {
        name,
        updateName,
        type,
      }
    }
  }
</script>

<style>
  .name {
    color: skyblue;
  }
</style>
