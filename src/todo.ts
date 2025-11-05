enum TaskStatus {
    Pending =  "Pending",
    Completed = "Completed",
    Archived = "Archived",
}

enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

class Task {
    static nextId = 1;
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    label?: Set<string>;
    createdAt: Date;
    dueDate?: Date;

    constructor(
        title: string,
        description: string,
        dueDate?: Date,
        label?: Set<string>
    ) {
        this.id = Task.nextId++;
        this.title = title;
        this.description = description;
        this.status = TaskStatus.Pending || TaskStatus.Completed || TaskStatus.Archived;
        this.priority = TaskPriority.Low || TaskPriority.Medium || TaskPriority.High;
        this.createdAt = new Date();
        this.dueDate = dueDate;
        this.label = label;

    }
}

