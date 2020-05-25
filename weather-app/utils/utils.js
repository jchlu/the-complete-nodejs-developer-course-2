const chalk = require('chalk')
const failFlash = `${chalk.redBright.inverse('FAILURE:')} `
const standOut = text => chalk.blue(text)

// const successFlash = `${chalk.greenBright.inverse('SUCCESS:')} `

const log = msg => {
  if (typeof msg === 'object') {
    console.table(msg)
  } else {
    console.log(msg)
  }
}

module.exports = {
  failFlash,
  log,
  standOut
}
