const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes.js')
const { describe, string, demandOption } = require('yargs')

//Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing your note',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a notes',
    builder: {
        title: {
            describe: 'Read the note',
            demandOption: true,
            type: 'string'
        }


    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)