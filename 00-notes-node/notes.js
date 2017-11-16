console.log('Init note.js');

// we get this variable in every file
//console.log(module);

module.exports.age = 21;

// ES5 function
module.exports.addNote = function () {
    console.log('addNode');
    return 'New Note';
};

// function in ES6
module.exports.add = (a,b) => {
    return a + b;
};