<template>    
    <div class="card mt-2" v-for="(item, index) in todoList" :key="index">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input class="form-check-input" type="checkbox" :checked="item.completed" @change="toggleTodo(index)">
          <!-- <input class="form-check-input" type="checkbox" v-model="item.completed"> -->
          <label class="form-check-lable" :class="{ todo : item.completed }">{{ index + 1 }}, {{ item.subject }}</label>
        </div>
        <div><button class="btn btn-danger btn-sm" @click="deleteTodo(index)">Delete</button></div>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        todoList: {
            type: Array,
            required: true
        }
    },//props

    emits: ['toggle-todo','delete-todo'],//emitOptions

    setup(props, { emit }) {
    const toggleTodo = (index) => {
        emit('toggle-todo', index);
    };

    const deleteTodo = (index) => {
        emit('delete-todo', index);
    }
    
    return {
        toggleTodo,
        deleteTodo,
        }
    }//setup
}
</script>
<style>
    
</style>