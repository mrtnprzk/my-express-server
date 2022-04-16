const express = require('express')
const app = express()
const port = 3000

// Routes: ----------------------------
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
//   console.log(request)
})

app.get('/contact', (req, res) => {
  res.send('Contact me: marti.parizek@gmail.com')
})

app.get('/about', (req, res) => {
    res.send('My name is Martin')
})

app.get('/hobbies', (req, res) => {
    res.send("swimming")
})

app.get('/by', (req, res) => {
    res.send("by")
})
// ------- ----------------------------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})