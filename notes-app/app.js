const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

const notes = require('./notes')

const log = console.log

/* log(notes.getNotes())
log(validator.isEmail('johnny+sausages@exito.tech'))
log(validator.isURL('https://exito.tech'))
log(chalk.blue.inverse.bold('Success!')) */

yargs.command({
  command: 'adding',
  aliases: ['add', 'new'],
  desc: 'Add a new note',
  handler: (argv) => {
    console.table(argv)
  }
})

/* yargs.command({
  command: 'configure <key> [value]',
  aliases: ['config', 'cfg'],
  desc: 'Set a config variable',
  builder: (yargs) => yargs.default('value', 'true'),
  handler: (argv) => {
    console.log(`setting ${argv.key} to ${argv.value}`)
  }
}) */

// console.table(process.argv)
log(yargs.argv)
// log(notes)
