Type in terminal
`node app.js add --title="secret" --body="this is my secret"`

yargs, parses title and body, into an object so it could be used quicker


# working with JSON

````
let obj = {
    name: 'Ricardo',
    age: 21
};
let strObj = JSON.stringify(obj);
console.log(typeof strObj);
console.log(strObj);

let personStr = '{"name":"Ricardo","age":21}';
let personObj = JSON.parse(personStr);
console.log(typeof personObj);
console.log(personObj);

````

# adding and saving notes
let duplicateNotes = notes.filter((note) => note.title === title);
// same funciton just different syntax
// let duplicateNotes = notes.filter((note) => {
//     return note.title === title;
// });
// let duplicateNotes = notes.filter(function(note){
//     return note.title === title;
// });d

# refactoring for reusability

# removing note

# debugging Node.js Applications
type in terminal
`node inspect playground/debugging.js`

debug> {cmds}
n         next lile
c         continue
repl      open the console like google

# debugging via Chrome Dev tools
type in terminal
`node --inspect-brk  playground/debugging.js`
then go to chrome and type:
`chrome://inspect`
