// tsk-1
const delay1 = () => {
    // console.log('5s delay'); 
}
setTimeout(delay1, 5000);


// tsk-2
function delayedGreeting(name, delayTime) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, delayTime)
}
const name = 'Alice';
const delayTime = 2000;
delayedGreeting(name, delayTime);

