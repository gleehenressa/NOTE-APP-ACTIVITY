const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('17.2.1')
//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
    
})
//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//List command
yargs.command({
    command: 'List',
    describe: 'List your note',
    handler() {
        notes.ListNotes()
    }
})


//read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)