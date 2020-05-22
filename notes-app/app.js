const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by NodeJS')

fs.appendFileSync('notes.txt', ' and appended to by using appendFileSync')
const data = [
  ' and again appended to by using appendFileSync',
  ' and again, appended to by using appendFileSync using an array'
]
fs.appendFileSync('notes.txt', data)
