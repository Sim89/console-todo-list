import inquirer from 'inquirer';
import {createTodo, deleteTodo, getTodoById, readTodos, updateTodo} from "./Todo-Functions/create-todo";
import {storeTodo} from "./Store-Todo/store-todo";
import { LocalStorage } from "node-localstorage";
import {Task, TaskPriority, TaskStatus} from "./Types/todo-types";

let todos: Task[] = [];

const localStorage = new LocalStorage("./scratch");

const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
    todos = JSON.parse(savedTodos);
}

async function mainMenu() {
    const { command } = await inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'Select a Command for Todo List:',
            choices: ['Create Todo', 'Read Todos', 'Get Todo By Id', 'Update Todo', 'Delete Todo', 'Exit']
        }
    ]);
    switch (command) {
        case 'Create Todo': {
            const answers = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Title:' },
                { type: 'input', name: 'description', message: 'Description:' },
                { type: 'list', name: 'priority', message: 'Priority (Low, Medium, High):', choices: Object.values(TaskPriority) },
                { type: 'list', name: 'status', message: 'Status (Pending, InProgress, Completed, Archived):', choices: Object.values(TaskStatus) },
                { type: 'input', name: 'dueDate', message: 'Due Date (YYYY-MM-DD):', default: '' },
            ]);
            todos = createTodo(
                todos,
                answers.title,
                answers.description,
                answers.priority,
                answers.status,
                answers.dueDate ? new Date(answers.dueDate) : undefined
            );
            console.log('Todo Added Successfully.');
            storeTodo(todos);
            await mainMenu();
            break;
        }
        case ('Read Todos'): {
            todos = readTodos(todos);
            console.log(todos);
            storeTodo(todos);
            await mainMenu();
            break;
        }
        case ('Get Todo by Id'): {
            const { id } = await inquirer.prompt([
                {type: 'input', name: 'id', message: 'Enter Todo Id to find:'}
            ]);
            const todo = getTodoById(todos, Number(id));
            if (todo) {
                console.log('Todo found:', todo);
            } else {
                console.log(`Todo with ID ${id} not found.`);
            }
            storeTodo(todos);
            await mainMenu();
            break;
        }
        case ('Update Todo'): {
            const {id} = await inquirer.prompt([
                {type: 'input', name: 'id', message: 'Update Todo ID:'}
            ]);
            const answers = await inquirer.prompt([
                {type: 'input', name: 'title', message: 'New Title:'},
                {type: 'input', name: 'description', message: 'New Description:'},
                {
                    type: 'list',
                    name: 'priority',
                    message: 'New Priority (Low, Medium, High):',
                    choices: Object.values(TaskPriority)
                },
                {
                    type: 'list',
                    name: 'status',
                    message: 'New Status (Pending, InProgress, Completed, Archived):',
                    choices: Object.values(TaskStatus)
                },
                {type: 'input', name: 'dueDate', message: 'New Due Date (YYYY-MM-DD):'},
            ]);
            todos = updateTodo(
                todos,
                Number(id),
                answers.title,
                answers.description,
                answers.priority,
                answers.status,
                answers.dueDate,
                new Date()
            );
            console.log('Todo Updated Successfully.');
            storeTodo(todos);
            await mainMenu();
            break;
        }
        case ('Delete Todo'): {
            const {id} = await inquirer.prompt([
                {name: 'id', message: 'Delete Todo ID', type: 'number'},
            ]);
            todos = deleteTodo(todos, Number(id));
            console.log('Todo Deleted Successfully.');
            storeTodo(todos);
            await mainMenu();
            break;
        }
        case ('Exit'): {
            return await mainMenu();
        }
    }
}
(async (): Promise<void> => {
    await mainMenu();
})();
