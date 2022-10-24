const fs = require('fs')
const path = require ('path')


const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

  let tasks = ["task1", "task2", "task3"];
 
 const showTasks = () => {
  console.log (tasks)
 }

 const prompt = require('prompt-sync')();
  let input = prompt ("Welcome to your task manager, Press:1. to see all your tasks, 2. to add a task, 3 to delete a task, 4. to mark a task as done, 5. to Exit the task manager");
  let inputTask = Number (input);
  const showtasks = () => {
   if (inputTask === 1){
      console.log('these are your tasks' + tasks);
      rl.close()
    } else if (inputTask === 2){
      let add_task = prompt ("add a task")
      tasks[tasks.length] = add_task
      console.log (tasks)
      rl.close()
    } else if (inputTask === 3) {
      let deleteTAsk = prompt ('delete the task')
      delete tasks[tasks.length -1]
      console.log (tasks)
      rl.close()
    } else if (inputTask === 4) {
      let doneTasks = prompt ('whis task is done')
      tasks[doneTasks -1] = tasks[doneTasks-1] +'done'
      console.log(tasks)
      rl.close()
    } else { 
      rl.close()
    }   
  
  
    
  }
  
  showtasks()
  






