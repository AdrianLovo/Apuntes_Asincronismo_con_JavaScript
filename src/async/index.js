const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {

        (true)
        ? setTimeout (() => resolve('Do Something ASync'), 3000)
        : reject(new Error('Test error'))  
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}



const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error)
    }
}


console.log('Before');
anotherFunction();
console.log('After');