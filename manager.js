const fs = require('fs')
const path = require ('path')


const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

  let tasks = ["task1", "task2", "task3", 'task4'];
  const prompt = require('prompt-sync')();
  let input = prompt ("Welcome to your task manager, Press:1. to see all your tasks, 2. to add a task 3, to delete a task, 4. to mark a task as done, 5. to Exit the task manager");
  let inputTask = Number (input);
  const showtasks = (tasks) => {
   if (inputTask === 1){
      console.log('task1');
      rl.close()
    } else if (inputTask === 2){
      console.log ('task2')
      rl.close()
    } else if (inputTask === 3) {
      console.log ('task3')
      rl.close()
    } else if (inputTask === 4) {
      console.log('task4')
      rl.close()
    } else { 
      rl.close()
    }   
  
  
    
  }
  
  showtasks()
  






