const chalk = require('chalk')
const validator = require('validator')

const notes = require('./notes')

const log = console.log

log(notes.getNotes())
log(validator.isEmail('johnny+sausages@exito.tech'))
log(validator.isURL('https://exito.tech'))
log(chalk.blue.inverse.bold('Success!'))
