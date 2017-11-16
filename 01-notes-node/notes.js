//console.log('Starting notes.js');

const fs = require('fs');


let fetchNotes = () => {
    try {
        let notesStr = fs.readFileSync('notes-data.json');
        return JSON.parse(notesStr);
    } catch (e) { return []; }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    // console.log('Adding note: ', title, body);
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title); // console.log('duplicateNotes: ', duplicateNotes);
    if( duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    // console.log('Getting all notes');
    let notes = fetchNotes();
    if(notes.length >= 1) { return notes; }
};

let getNote = (title) => {
    // console.log(`Getting note: ${title}`);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    if(filteredNotes.length === 1) {
        return filteredNotes[0];
    }
};

let removeNote = (title) => {
    // console.log(`Removing note: ${title}`);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title != title);
    saveNotes(filteredNotes);

    return (notes.length !== filteredNotes.length);
};

let logNote = (note) => {
    //debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Note: ${note.body}`);
};


// ES6 format --
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};

// ES5 format
// module.exports = {
//     addNote: addNote
// };
