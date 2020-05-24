const yargs = require('yargs')
const { addNote, readNote, removeNote, loadNotes } = require('./utils')

const table = console.table

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
  handler: argv => {
    addNote(argv)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read the specified note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    readNote(argv)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove the specified note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    removeNote(argv)
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: _ => {
    const notes = loadNotes()
    table(notes)
  }
})

yargs.parse()
