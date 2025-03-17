<template>
  <div class="container">
    <div>one more step</div>
    <h2>To-Do List</h2>
    <input class="form-control" type="text" placeholder="Search" v-model="searchText">
    <hr>
    <TodoSimpleForm @add-todoList="addTodolist"/>
    <div>{{ error }}</div>

    <div v-if="filteredTodoList.length == 0">There is nothing to display</div>

    <TodoList :todoList="filteredTodoList" @toggle-todo="toggleTodo" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';
import TodoList from './components/TodoList.vue';
import axios from 'axios';

  export default {
    components: {
      TodoSimpleForm,
      TodoList,
    },

    setup() {
        const todoList = reactive([]);
        const error = ref('');
        
        const addTodolist = (todo) => {
          error.value = '';

          axios.post('http://localhost:3000/todoList', {
            subject: todo.subject,
            completed: todo.completed,
          }).then(res => {
            console.log(res);

            todoList.push(res.data);
          }).catch(err => {
            error.value = 'Something went wrong.'

            console.log(err);
          });//axios.post
        };//addTodolist
        
        const toggleTodo = (index) => {
          todoList[index].completed = !todoList[index].completed;
        };//toggleTodo

        const deleteTodo = (index) => {
          todoList.splice(index, 1);
        };//deleteTodo

        const searchText = ref('');
        const filteredTodoList = computed(()  => {
          if(searchText.value) {
            return todoList.filter(todo => {
              return todo.subject.includes(searchText.value);
            });
          }
          return todoList;
        });//filteredTodoList

      return {
        todoList,
        addTodolist,
        deleteTodo,
        toggleTodo,
        searchText,
        filteredTodoList,
        error,
      }//return
    }
  }
</script>

<style>
  .todo {
    color: gray;
    text-decoration: line-through;
  }
</style>
