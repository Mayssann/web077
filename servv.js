const express = require('express')
var cors = require('cors')

const PORT = process.env.PORT || 3030;
const app = express()
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/data', function (req, res) {
    var data = [
        {id:11 , name:'rana'},
        {id:12 , name:'rama'},
        {id:13 , name:'mysn'}

    ]
    res.send(data)
  })

app.listen(PORT)