<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <TodoSimpleForm @add-todoList="addTodolist"/>

    <div v-if="todoList.length == 0">Empty todoList</div>
    <div class="card mt-2" v-for="(item, index) in todoList" :key="index">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input class="form-check-input" type="checkbox" v-model="item.completed">
          <label class="form-check-lable" :class="{ todo : item.completed }">{{ index + 1 }}, {{ item.subject }}</label>
        </div>
        <div><button class="btn btn-danger btn-sm" @click="deleteTodo(index)">Delete</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';

  export default {
    components: {
      TodoSimpleForm
    },
    setup() {
        const todoList = reactive([]);
        
        const addTodolist = (todo) => {
          todoList.push(todo);
        };

        const deleteTodo = (index) => {
          todoList.splice(index, 1);
        };

      return {
        todoList,
        addTodolist,
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
