// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked.');
//         reject('Hey. It was rejected.');
//     }, 1000);
// });

// somePromise
//     .then((message) => {
//         console.log(`Success: ${message}`);
//     }, (errorMessage) => {
//         console.log(`Rejected: ${errorMessage}`);
//     });


let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            } else {
                reject("Arguments must be numbers");
            }
        }, 1500);
    });
};

// asyncAdd(3, '7')
//     .then((res) => {
//         console.log('Result: ',res);
//         return asyncAdd(res, 2);
//     }, (errorMessage) => {
//         console.log(errorMessage);
//     }).then((res) => {
//       console.log('New Res(12): ', res);
//     },(errorMessage) => {
//       console.log(errorMessage);
//     });

asyncAdd(3, 7)
.then((res) => {
    console.log('Result: ',res);
    return asyncAdd(res, 2);
})
.then((res) => {
  console.log('New Res(12): ', res);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});