console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 2000)
console.log(4);
console.log(5);

const intervalId = setInterval(()=>{
console.log(6);
clearInterval(intervalId)
},3000)

