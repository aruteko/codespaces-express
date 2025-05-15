const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ねむてぇ!')
})

app.get('/users/:id', function (req, res) {
  res.send('User ID: ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
