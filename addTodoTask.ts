
export function addTodoTask(
    title:string,
    description: string,
    status?: "in progress" | "completed"| "archived",
    priority?: "low" | "medium" | "high",
    labels?:string[],
    createdAt?: Date,
    dueDate?: Date
) {
  const newTask = {
        title,
        description,
        status: status ?? "in progress",
        priority: priority ?? "medium",
        labels: labels ?? ["personal", "work", "urgent", "low priority", "home", "shopping", "finance", "health", "meeting", "study"],
        createdAt: createdAt ?? new Date(),
        dueDate: dueDate ?? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
  return newTask;
}