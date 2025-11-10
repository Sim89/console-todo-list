import {Task, TaskPriority, TaskStatus} from "../src/Types/todo";

export function todoFunctions(
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
