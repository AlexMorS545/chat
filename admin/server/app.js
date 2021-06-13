const app = require('express')()
const server = require('http').createServer(app)
const io = require("socket.io")(server)
const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, cb) => {
    if(!data) {
      return cb('Возникла ошибка!')
    }
    socket.emit('newMessage', m('admin', `Hi ${data.name}`))
  })

  // socket.on('craeteMessage', data => {
  //   socket.emit('newMessage', {
  //     text: data.text + ' io server'
  //   })
  // })


})


module.exports = {
  app, server
}
