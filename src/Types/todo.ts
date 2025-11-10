export enum TaskStatus {
    Pending =  "Pending",
    Completed = "Completed",
    Archived = "Archived",
}

export enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export class Task {
    static nextId = 1;
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: Date;
    dueDate?: Date;

    constructor(
        title: string,
        description: string,
        dueDate?: Date,
    ) {
        this.id = Task.nextId++;
        this.title = title;
        this.description = description;
        this.status = TaskStatus.Pending || TaskStatus.Completed || TaskStatus.Archived;
        this.priority = TaskPriority.Low || TaskPriority.Medium || TaskPriority.High;
        this.createdAt = new Date();
        this.dueDate = dueDate;

    }
}

