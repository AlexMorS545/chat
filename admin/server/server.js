const { Nuxt, Builder } = require('nuxt')
const port = process.env.PORT || 3000
const {app, server} = require('./app')

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

// Listen the server
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
