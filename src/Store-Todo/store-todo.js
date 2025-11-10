"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeTodo = storeTodo;
var node_localstorage_1 = require("node-localstorage");
var localStorage = new node_localstorage_1.LocalStorage("./scratch");
function storeTodo(todos) {
    var todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos', todosJSON);
    console.log(JSON.stringify(todosJSON));
}
