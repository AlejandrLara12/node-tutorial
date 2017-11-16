const fs = require('fs');

let originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

let originalNoteStr = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteStr);

let noteStr = fs.readFileSync('notes.json');
let note = JSON.parse(noteStr);

console.log(typeof note);
console.log(note);