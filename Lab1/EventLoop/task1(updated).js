const f1 = () => {
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};

const f2 = ()=> {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end");
}

const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 ends");
}

// JavaScript is synchronous and single threaded 

function main () {
    console.log("main starts");
    f1();
    console.log("main running");
    console.log("main ends");
}
main();

// In asynchronous we use event loop to manage the call stack.
// Asynchronous call using timers 
// 1.Set timeout
// 2. Set immediate
// 3. process.next tick'
// 4. Set Interval

