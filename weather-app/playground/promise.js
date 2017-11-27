let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It worked.');
        reject('Hey. It was rejected.');
    }, 1000);
});

somePromise
    .then((message) => {
        console.log(`Success: ${message}`);
    }, (errorMessage) => {
        console.log(`Rejected: ${errorMessage}`);
    });