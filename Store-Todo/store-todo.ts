import {Task} from "../src/Types/todo";
import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage("./scratch");

export function storeTodo(todos: Task []): void {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos', todosJSON);
    console.log(JSON.stringify(todosJSON));
}