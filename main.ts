//jab hamen jawab yes or no m chahiye hota hai to type confirm hoti hai  

import inquirer from "inquirer";
let todos = [];
let condition = (true);

while (condition){
let todolist =await inquirer.prompt([
    {message: "what you want to add in your todos?", name: "todo",type: "input"},
    {message: "do you want to add more ", type: "confirm", name: "addMore",default: "false"}
])

todos.push(todolist.todo);
condition = todolist.addMore
console.log(todos)
}
