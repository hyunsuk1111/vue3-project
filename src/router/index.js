import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/index.vue';
import TodoList from '../pages/todoList/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', name: 'todoHome', component: Home },
        { path:'/todoList', name: 'todoList', component: TodoList }
    ]
});

//1.home
//2.todoList
//3.todoList/create
//4.todoList/id

export default router;
