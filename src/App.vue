<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <TodoSimpleForm @add-todoList="addTodolist"/>
    <div v-if="todoList.length == 0">Empty todoList</div>
    <TodoList :todoList="todoList" @toggle-todo="toggleTodo" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import {reactive} from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';
import TodoList from './components/TodoList.vue';

  export default {
    components: {
      TodoSimpleForm,
      TodoList,
    },

    setup() {
        const todoList = reactive([]);
        
        const addTodolist = (todo) => {
          todoList.push(todo);
        };
        
        const toggleTodo = (index) => {
          todoList[index].completed = !todoList[index].completed;
        };

        const deleteTodo = (index) => {
          todoList.splice(index, 1);
        };


      return {
        todoList,
        addTodolist,
        deleteTodo,
        toggleTodo,
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
