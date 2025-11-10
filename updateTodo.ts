export function updateTodo(todos: Task[], id: number, updateTodo: Partial<Omit<Task, "id">>, title: string, description: string, priority: string, status: string, dueDate: Date): Task[] {
    return todos.map(todo => todo.id === id ? {...todo, ...updateTodo } : todo);
}