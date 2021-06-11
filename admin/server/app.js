const app = require('express')()
const server = require('http').createServer(app)
const io = require("socket.io")(server)

io.on('connection', socket => {

  socket.on('userJoined', (data, cb))

  socket.on('craeteMessage', data => {
    socket.emit('newMessage', {
      text: data.text + ' io server'
    })
  })


})


module.exports = {
  app, server
}
