"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = createTodo;
exports.readTodos = readTodos;
exports.getTodoById = getTodoById;
exports.deleteTodo = deleteTodo;
exports.updateTodo = updateTodo;
var todo_types_1 = require("../Types/todo-types");
function createTodo(todos, title, description, priority, status, dueDate) {
    var newTodo = new todo_types_1.Task(Date.now(), title, description, dueDate);
    newTodo.priority = priority;
    newTodo.status = status;
    return __spreadArray(__spreadArray([], todos, true), [newTodo], false);
}
function readTodos(todos) {
    return todos;
}
function getTodoById(todos, id) {
    var todo = todos.find(function (todo) { return todo.id === id; });
    if (todo) {
        console.log("Todo found: ".concat(todo.title));
    }
    else {
        console.log("Todo with ID ".concat(id, " not found."));
    }
    return todo;
}
function deleteTodo(todos, id) {
    return todos.filter(function (todo) { return todo.id !== id; });
}
function updateTodo(todos, id, updateTodo, title, description, priority, status, dueDate) {
    return todos.map(function (todo) { return todo.id === id ? __assign(__assign({}, todo), updateTodo) : todo; });
}
