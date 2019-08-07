const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const port = 3333

const server = express()
mongoose.connect('mongodb+srv://ademar:71055070@cluster0-ozveg.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(port)
