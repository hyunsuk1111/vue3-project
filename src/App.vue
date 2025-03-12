<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <form class="d-flex" @submit.prevent="onSubmit">
      <div class="flex-grow-1 mr-2">
        <input class="form-control" type="text" placeholder="Type New to-do" v-model="todo">
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">{{ index + 1 }}, {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup() {
      const todo = ref('');
      const todoList = ref([]);

      const onSubmit = () => {
        todoList.value.push({
          id : Date.now(),
          subject: todo.value,
        });
      };

      return {
        todo,
        todoList,
        onSubmit,
      }
    }
  }
</script>

<style>
  .name {
    color: skyblue;
  }
</style>
