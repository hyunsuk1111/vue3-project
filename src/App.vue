<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <form @submit.prevent="onSubmit">
      <div class="d-flex">
        <div class="flex-grow-1 mr-2">
          <input class="form-control" type="text" placeholder="Type new Todo" v-model="todo">
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
      <div v-show="hasError" style="color: red;">This field cannot be empty</div>
    </form>
    <div class="card mt-2" v-for="(item, index) in todoList" :key="index">
      <div class="card-body p-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="item.completed">
          <label class="form-check-lable">{{ index + 1 }}, {{ item.subject }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';

  export default {
    setup() {
        const todo = ref('');
        const todoList = reactive([]);
        const hasError = ref(false);

        const onSubmit = () => {
          if(todo.value === '') {
            hasError.value = true;
          } else {
            todoList.push({
              id: Date.now(),
              subject: todo.value,
              completed: false,
            });

            hasError.value = false;
          }
          todo.value = '';
        };

      return {
        todo,
        todoList,
        hasError,
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
