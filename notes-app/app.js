const yargs = require('yargs')

const log = console.log

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
  handler: ({ title, body }) => {
    log(`Title: ${title}`)
    log(`Body: ${body}`)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read the specified note',
  handler: _ => {
    log('Reading the specified note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove the specified note',
  handler: _ => {
    log('Removing the specified note')
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: _ => {
    log('Listing all notes')
  }
})

yargs.parse()
