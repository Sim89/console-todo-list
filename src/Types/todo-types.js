"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskPriority = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Pending"] = "Pending";
    TaskStatus["Completed"] = "Completed";
    TaskStatus["Archived"] = "Archived";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["Low"] = "Low";
    TaskPriority["Medium"] = "Medium";
    TaskPriority["High"] = "High";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
var Task = /** @class */ (function () {
    function Task(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = TaskStatus.Pending || TaskStatus.Completed || TaskStatus.Archived;
        this.priority = TaskPriority.Low || TaskPriority.Medium || TaskPriority.High;
        this.createdAt = new Date();
        this.dueDate = dueDate;
    }
    return Task;
}());
exports.Task = Task;
