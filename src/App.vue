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
    <div v-if="todoList.length == 0">Empty todoList</div>
    <div class="card mt-2" v-for="(item, index) in todoList" :key="index">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input class="form-check-input" type="checkbox" v-model="item.completed">
          <!-- <label class="form-check-lable" :style="item.completed ? todoStyle : {}">{{ index + 1 }}, {{ item.subject }}</label> -->
          <label class="form-check-lable" :class="{ todo : item.completed }">{{ index + 1 }}, {{ item.subject }}</label>
        </div>
        <div><button class="btn btn-danger btn-sm" @click="deleteTodo(index)">Delete</button></div>
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
        /* const todoStyle = {
          textDecoration: 'line-through',
          color: 'gray',

        } */

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

        const deleteTodo = (index) => {
          todoList.splice(index, 1);
        };

      return {
        todo,
        todoList,
        hasError,
        /* todoStyle, */
        onSubmit,
        deleteTodo,
      }
    }
  }
</script>

<style>
  .todo {
    color: gray;
    text-decoration: line-through;
  }
</style>
