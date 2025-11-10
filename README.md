# Console Todo-list App

A command-line Todo List App built with TypeScript. It allows you to create, read, update, and delete todos, set priorities, statuses, and due dates, and stores your tasks locally for persistence.

## Features
- Add new todos with title, description, priority, status, and due date.
- View all todos or filter by status (pending, in-progress, completed).
- Update existing todos.
- Delete todos.
- Data persistence using a local JSON file.

## Prerequisites
- Node.js installed on your machine.
- To run the index.ts file in the console, first compile it to JavaScript using the TypeScript compiler, then run the output with Node.js:
   - npx tsc index.ts
     - node index.js
     - Or directly run the TypeScript file using ts-node:
     - npx ts-node index.ts
     - This will start the Todo List App in your console.
     - Follow the prompts to manage your todos.
     - The todos will be saved in a local file named `todos.json` in the same directory.
     