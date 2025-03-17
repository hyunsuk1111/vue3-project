<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <input class="form-control" type="text" placeholder="Search" v-model="searchText">
    <hr>
    <TodoSimpleForm @add-todoList="addTodolist"/>
    <div v-if="filteredTodoList.length == 0">There is nothing to display</div>
    <TodoList :todoList="filteredTodoList" @toggle-todo="toggleTodo" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue';
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

        const searchText = ref('');
        const filteredTodoList = computed(()  => {
          if(searchText.value) {
            return todoList.filter(todo => {
              return todo.subject.includes(searchText.value);
            });
          }
          return todoList;
        });

      return {
        todoList,
        addTodolist,
        deleteTodo,
        toggleTodo,
        searchText,
        filteredTodoList,
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
