import {Task} from "../src/Types/todo";

export function getTodoById(todos: Task[], id: number): Task | undefined {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        console.log(`Todo found: ${todo.title}`);
    } else {
        console.log(`Todo with ID ${id} not found.`);
    }
    return todo;
}