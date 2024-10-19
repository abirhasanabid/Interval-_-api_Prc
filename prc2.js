function telJoke() {
    const jokeInterval = setInterval(() => {
        console.log(`why don't scientists trust atoms? Because the make up everything`);
    }, 2000);
    setTimeout(() => {
        const clear = clearInterval(jokeInterval)
    }, 10000)
};
telJoke();
