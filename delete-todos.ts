
export function deleteTodo(todos: Task[], id: number): Task[] {
    return todos.filter(todo => todo.id !== id);
}
