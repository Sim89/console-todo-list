export enum TaskStatus {
    Pending =  "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Archived = "Archived",
}

export enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: Date;
    dueDate?: Date;

    constructor(
        id: number,
        title: string,
        description: string,
        dueDate?: Date,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = TaskStatus.Pending || TaskStatus.InProgress || TaskStatus.Completed || TaskStatus.Archived;
        this.priority = TaskPriority.Low || TaskPriority.Medium || TaskPriority.High;
        this.createdAt = new Date();
        this.dueDate = dueDate;

    }
}

