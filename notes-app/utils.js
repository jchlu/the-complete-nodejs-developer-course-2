const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'
const failFlash = `${chalk.redBright.inverse('FAILURE:')} `
const successFlash = `${chalk.greenBright.inverse('SUCCESS: ')} `

const log = msg => {
  if (typeof msg === 'object') {
    console.table(msg)
  } else {
    console.log(msg)
  }
}

const addNote = ({ title, body }) => {
  const notes = loadNotes()
  const dupe = notes.find(note => note.title === title)
  if (dupe) {
    log(failFlash + `The title "${chalk.blue.bold(title)}" is already taken`)
  } else {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    log(successFlash + `The new "${chalk.blue.bold(title)}" note saved!`)
  }
}

const removeNote = ({ title }) => {
  const notes = loadNotes()
  const remainingNotes = notes.filter(note => note.title !== title)
  if (notes.length === remainingNotes.length) {
    log(failFlash + `There wasn't a note titled "${chalk.blue.bold(title)}" found, so nothing was removed.`)
  } else {
    saveNotes(remainingNotes)
    log(successFlash + `The note titled "${chalk.blue.bold(title)}" was removed.`)
  }
}

const saveNotes = notes => {
  fs.writeFileSync(fileName, JSON.stringify(notes))
}

const readNote = ({ title }) => {
  const allNotes = loadNotes()
  const note = allNotes.find(note => title === note.title)
  if (note) {
    log(note)
  } else {
    log(failFlash + `There was no note titled: "${chalk.blue.bold(title)}" found.`)
  }
}

const loadNotes = _ => {
  try {
    const dataBuffer = fs.readFileSync(fileName)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote,
  readNote,
  loadNotes,
  removeNote,
  log
}
