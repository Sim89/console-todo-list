import {Task, TaskPriority, TaskStatus} from "../Types/todo-types";

export function createTodo(
    todos: Task[],
    title: string,
    description: string,
    priority: TaskPriority,
    status: TaskStatus,
    dueDate?: Date
): Task[] {
    const newTodo = new Task(
        Date.now(),
        title,
        description,
        dueDate
    );
    newTodo.priority = priority;
    newTodo.status = status;
    return [...todos, newTodo];
}

export function readTodos(todos: Task[]): Task[] {
    return todos;
}

export function getTodoById(todos: Task[], id: number): Task | undefined {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        console.log(`Todo found: ${todo.title}`);
    } else {
        console.log(`Todo with ID ${id} not found.`);
    }
    return todo;
}

export function deleteTodo(todos: Task[], id: number): Task[] {
    return todos.filter(todo => todo.id !== id);
}

export function updateTodo(todos: Task[], id: number, updateTodo: Partial<Omit<Task, "id">>, title: string, description: string, priority: string, status: string, dueDate: Date): Task[] {
    return todos.map(todo => todo.id === id ? {...todo, ...updateTodo } : todo);
}