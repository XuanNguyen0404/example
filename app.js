// const fs = require('fs');

//fs.writeFileSync('note.txt', 'My name is Xuan'); 

//fs.appendFileSync('note.txt', '. HMM, that\'s good ')
//const read = require('./utils') 

const command = process.argv[2];
const yargs = require('yargs');
const notes = require('./notes')
// customize yargs version
yargs.version('1.1.0')

// create add command
// hello anh em, chao mung anh em

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    descibe: 'remove a note',
    builder: {
        title: {
            describe: 'remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('list a note')
    }
})

// create read command 

yargs.command({
    command: 'read',
    describe: "read a note",
    handler: function(){
        console.log('read a note')
    }
})
yargs.parse();
