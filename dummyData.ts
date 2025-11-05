import {Task} from "./getTasks";

export const tasks: Task[] = [
    {
        id: 1,
        title: "Implement authentication",
        description: "Add login and registration functionality using JWT",
        status: "pending",
        dueDate: "2025-11-06",
        priority: "high",
        label: "backend",
        createdAt: "2025-11-05T10:00:00Z"
    },
    {
        id: 2,
        title: "Fix TypeScript build errors",
        description: "Resolve type mismatches and missing interfaces",
        status: "in progress",
        dueDate: "2025-11-07",
        priority: "medium",
        label: "frontend",
        createdAt: "2025-11-05T11:00:00Z"
    },
    {
        id: 3,
        title: "Write unit tests for API",
        description: "Use Jest to test all endpoints in the user module",
        status: "completed",
        dueDate: "2025-11-05",
        priority: "low",
        label: "testing",
        createdAt: "2025-11-05T09:00:00Z"
    }
];
