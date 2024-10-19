/* 
Create a loop that prints numbers 1 to 5, with each number printed 1 second apart from the previous one.
 */
for (let i = 1; 5 >= i; i++) {
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}