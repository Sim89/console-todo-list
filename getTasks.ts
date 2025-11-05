export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: string;
    label: string;
    createdAt: string;
}
export function getTasks(tasks: Task[]): Task[] {
    return tasks;

}