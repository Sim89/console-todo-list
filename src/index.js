"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var create_todo_1 = require("./Todo-Functions/create-todo");
var store_todo_1 = require("./Store-Todo/store-todo");
var node_localstorage_1 = require("node-localstorage");
var todo_types_1 = require("./Types/todo-types");
var todos = [];
var localStorage = new node_localstorage_1.LocalStorage("./scratch");
var savedTodos = localStorage.getItem('todos');
if (savedTodos) {
    todos = JSON.parse(savedTodos);
}
function mainMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var command, _a, answers, id, todo, id, answers, id;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'list',
                            name: 'command',
                            message: 'Select a Command for Todo List:',
                            choices: ['Create Todo', 'Read Todos', 'Get Todo By Id', 'Update Todo', 'Delete Todo', 'Exit']
                        }
                    ])];
                case 1:
                    command = (_b.sent()).command;
                    _a = command;
                    switch (_a) {
                        case 'Create Todo': return [3 /*break*/, 2];
                        case ('Read Todos'): return [3 /*break*/, 5];
                        case ('Get Todo by Id'): return [3 /*break*/, 7];
                        case ('Update Todo'): return [3 /*break*/, 10];
                        case ('Delete Todo'): return [3 /*break*/, 14];
                        case ('Exit'): return [3 /*break*/, 17];
                    }
                    return [3 /*break*/, 19];
                case 2: return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'title', message: 'Title:' },
                        { type: 'input', name: 'description', message: 'Description:' },
                        { type: 'list', name: 'priority', message: 'Priority (Low, Medium, High):', choices: Object.values(todo_types_1.TaskPriority) },
                        { type: 'list', name: 'status', message: 'Status (Pending, InProgress, Completed, Archived):', choices: Object.values(todo_types_1.TaskStatus) },
                        { type: 'input', name: 'dueDate', message: 'Due Date (YYYY-MM-DD):', default: '' },
                    ])];
                case 3:
                    answers = _b.sent();
                    todos = (0, create_todo_1.createTodo)(todos, answers.title, answers.description, answers.priority, answers.status, answers.dueDate ? new Date(answers.dueDate) : undefined);
                    console.log('Todo Added Successfully.');
                    (0, store_todo_1.storeTodo)(todos);
                    return [4 /*yield*/, mainMenu()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 5:
                    todos = (0, create_todo_1.readTodos)(todos);
                    console.log(todos);
                    (0, store_todo_1.storeTodo)(todos);
                    return [4 /*yield*/, mainMenu()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 7: return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'id', message: 'Enter Todo Id to find:' }
                    ])];
                case 8:
                    id = (_b.sent()).id;
                    todo = (0, create_todo_1.getTodoById)(todos, Number(id));
                    if (todo) {
                        console.log('Todo found:', todo);
                    }
                    else {
                        console.log("Todo with ID ".concat(id, " not found."));
                    }
                    (0, store_todo_1.storeTodo)(todos);
                    return [4 /*yield*/, mainMenu()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 10: return [4 /*yield*/, inquirer_1.default.prompt([
                        { type: 'input', name: 'id', message: 'Update Todo ID:' }
                    ])];
                case 11:
                    id = (_b.sent()).id;
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            { type: 'input', name: 'title', message: 'New Title:' },
                            { type: 'input', name: 'description', message: 'New Description:' },
                            {
                                type: 'list',
                                name: 'priority',
                                message: 'New Priority (Low, Medium, High):',
                                choices: Object.values(todo_types_1.TaskPriority)
                            },
                            {
                                type: 'list',
                                name: 'status',
                                message: 'New Status (Pending, InProgress, Completed, Archived):',
                                choices: Object.values(todo_types_1.TaskStatus)
                            },
                            { type: 'input', name: 'dueDate', message: 'New Due Date (YYYY-MM-DD):' },
                        ])];
                case 12:
                    answers = _b.sent();
                    todos = (0, create_todo_1.updateTodo)(todos, Number(id), answers.title, answers.description, answers.priority, answers.status, answers.dueDate, new Date());
                    console.log('Todo Updated Successfully.');
                    (0, store_todo_1.storeTodo)(todos);
                    return [4 /*yield*/, mainMenu()];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 14: return [4 /*yield*/, inquirer_1.default.prompt([
                        { name: 'id', message: 'Delete Todo ID', type: 'number' },
                    ])];
                case 15:
                    id = (_b.sent()).id;
                    todos = (0, create_todo_1.deleteTodo)(todos, Number(id));
                    console.log('Todo Deleted Successfully.');
                    (0, store_todo_1.storeTodo)(todos);
                    return [4 /*yield*/, mainMenu()];
                case 16:
                    _b.sent();
                    return [3 /*break*/, 19];
                case 17: return [4 /*yield*/, mainMenu()];
                case 18: return [2 /*return*/, _b.sent()];
                case 19: return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mainMenu()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
