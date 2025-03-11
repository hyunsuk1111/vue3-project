<template>
  <div>one more step</div>
  <div class="name">
    {{ name }}
    {{ reactiveTest }}
  </div>
  <button class="btn btn-primary" v-on:click="updateName">Click</button>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';

  export default {
    setup() {
      const name = ref('hyunsuk');
      const reactiveTest = reactive({
        id : 1
      });

      /* const greeting = (name) => {
        return name + ' Hello';
      }

      const greet = greeting(name); */

      const updateName = () => {
        name.value = 'hyunsuk1111';
        reactiveTest.id = 2;
      }

      return {
        name,
        reactiveTest,
        updateName,
      }
    }
  }
</script>

<style>
  .name {
    color: skyblue;
  }
</style>
