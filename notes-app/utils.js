const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'
const log = console.log
const table = console.table
const failFlash = chalk.redBright.inverse('FAILURE:')
const successFlash = chalk.greenBright.inverse('SUCCESS:')

const addNote = ({ title, body }) => {
  const notes = loadNotes()
  const dupes = notes.filter(note => note.title === title)
  if (dupes.length) {
    log(failFlash + ` The title ${title} is already taken`)
  } else {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    log(successFlash + ` The new ${title} note saved!`)
  }
}

const removeNote = ({ title }) => {
  const notes = loadNotes()
  const remainingNotes = notes.filter(note => note.title !== title)
  if (notes.length === remainingNotes.length) {
    log(failFlash + ` There wasn't a note titled ${title} found, so it wasn't removed.`)
  } else {
    saveNotes(remainingNotes)
    log(successFlash + ` The note titled ${title} was removed.`)
  }
}

const saveNotes = notes => {
  fs.writeFileSync(fileName, JSON.stringify(notes))
}

const getNote = ({ title }) => {
  const allNotes = loadNotes()
  const note = allNotes.filter(note => title === note.title)
  table(note)
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
  getNote,
  loadNotes,
  removeNote
}
