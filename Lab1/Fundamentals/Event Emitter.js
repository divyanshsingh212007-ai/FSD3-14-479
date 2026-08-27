import {EventEmitter} from 'node:events'

const sayHi = (name)=> {
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", ()=> {
    console.log(`System Started`);
});

task.on("greet", sayHi);
task.on("greet", (name) => {
    console.log(`${name} starts working`);
});
task.on("greet", (name) => {
    console.log(`${name} Logged out`);
});
task.once("exit", (name) => {
    console.log(`System Shut down by ${name}`);
});

task.emit("greet", "Rahul Singh");
task.emit("greet", "Harsh Sharma"); 
console.log()
task.emit("exit","Manager");
task.emit("exit","Employee");