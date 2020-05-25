const path = require('path')
const express = require('express')
const app = express()

// Paths for express config
const staticPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './views')

// Configure Handlebars as engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set static serve root
app.use(express.static(staticPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Johnny'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Johnny C-L'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    msgs: [{ p: 'All these worlds are yours, except Europa.' }, { p: 'Attempt no landings there.' }]
  })
})

app.get('/weather', (req, res) => {
  res.send('Weather Page')
})

app.listen(3000, _ => {
  console.log('Server up at http://localhost:3000')
})
