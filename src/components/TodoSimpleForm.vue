<template>
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
</template>

<script>
import { ref } from 'vue';

    export default {
        emits: ['add-todoList'],

        setup(props, { emit }) {
            const todo = ref('');
            const hasError = ref(false);

            const onSubmit = () => {
            if(todo.value === '') {
                hasError.value = true;
            } else {
                emit('add-todoList', {
                    id: Date.now(),
                    subject: todo.value,
                    completed: false,
                });
              hasError.value = false;
          }
          todo.value = '';
        };//onSubmit

        return {
            todo,
            hasError,
            onSubmit,
        }

        }//setup
    }
</script>

<style></style>