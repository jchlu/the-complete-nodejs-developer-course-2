console.log('script loaded')

fetch('/weather?address="Las Terrenas"').then(response => {
  response.json().then(data => {
    if (data.error) {
      console.error(data.error)
    } else {
      console.log(data)
    }
  })
})
