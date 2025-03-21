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
    <hr>
    <TodoFooter :currentPage="currentPage" :numberOfPages="numberOfPages" @change-page="getTodoList"/>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue';
import TodoSimpleForm from './components/TodoSimpleForm.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue'
import axios from 'axios';

  export default {
    components: {
      TodoSimpleForm,
      TodoList,
      TodoFooter,
    },

    setup() {
        const todoList = reactive([]);
        const error = ref('');
        const numberOfTodoList = ref(0);
        const limit = 5;
        const currentPage = ref(1);

        const numberOfPages = computed(() => {
          return Math.ceil(numberOfTodoList.value / limit);
        });

        const getTodoList = async (page = currentPage.value) => {
          currentPage.value = page;

          try {
            const res = await axios.get(`http://localhost:3000/todoList?_page=${page}&_limit=${limit}`);
            numberOfTodoList.value = res.headers['x-total-count'];

            todoList.splice(0, todoList.length, ...res.data);
          } catch (err) {
            console.log(err);
          }
        }//getTodoList

        getTodoList(currentPage.value);
        
        const addTodolist = async (todo) => {
          error.value = '';

          try { 
            const res = await axios.post('http://localhost:3000/todoList', {
              subject: todo.subject,
              completed: todo.completed,
            });

            todoList.push(res.data);
          } catch(err) {
            error.value = 'Something went wrong.'

            console.log(err);
          }
        };//addTodolist
        
        const toggleTodo = async (index) => {
          const id = todoList[index].id;

          try {
            await axios.patch('http://localhost:3000/todoList/'+ id, {
              completed: !todoList[index].completed,
            });  

            todoList[index].completed = !todoList[index].completed;
          } catch (err) {
            error.value = 'Something went wrong.'

            console.log(err);
          }

        };//toggleTodo

        const deleteTodo = async (index) => {
          const id = todoList[index].id;

          try {
            await axios.delete('http://localhost:3000/todoList/'+ id);
            
            todoList.splice(index, 1);
          } catch (error) {
            console.log(error);
            
            error.value = 'Something went wrong.'
          }
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
        getTodoList,
        numberOfPages,
        currentPage,
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
