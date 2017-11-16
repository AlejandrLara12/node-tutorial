// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

// console.log(process.argv); // returns the an arr of arguments given on the command line
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: {
      describe: 'Note it self',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
debugger;
// console.log('yargs: ', argv);

// let command = process.argv[2];
let command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log(`Success: Note created`);
        notes.logNote(note);
    } else { console.log(`Error: '${argv.title}' is already in use`); }
} else if (command === 'list') {
    //console.log('Listing all notes');
    let notesArr = notes.getAll();
    console.log(`Listing ${notesArr.length} note(s)`);
    if( notesArr ){
      notesArr.forEach((note) => notes.logNote(note));
    }
} else if (command === 'read') {
    //console.log('Reading note');
    let noteFound = notes.getNote(argv.title);
    noteFound ? notes.logNote(noteFound) : console.log(`'${argv.title}' not found`);

} else if (command === 'remove') {
    // console.log('Removing note');
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? `'${argv.title}' was removed`: `Couldn't find '${argv.title}'`;
    console.log(message);
} else {
    console.log('Command not recognized');
}
