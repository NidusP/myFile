const express = require('express')
const app = express()
const controller = require('./controller/controller')

app.set('view engine', 'ejs')
app.get('/:number',controller.showResult)

app.use(express.static('public'));
app.listen(5000, function () {
    console.log("begin")
})