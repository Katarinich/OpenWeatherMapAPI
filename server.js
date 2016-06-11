import express from 'express'
import { Server } from 'http'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './containers/App'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './webpack.config'

const app = express()
const server = Server(app)
const port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'))
app.use('/js', express.static(__dirname + '/node_modules/typeahead.js/dist'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/css', express.static(__dirname + '/static/css'))
app.use('/img', express.static(__dirname + '/static/images'))

app.get('/api/cities', function(req, res) {
  res.sendFile(__dirname + '/city.list.json')
})

app.use(handleRender)

function handleRender(req, res) {
    const store = configureStore()
    const initialState = store.getState()

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    res.send(renderFullPage(html, initialState))
}

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/style.css">
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/typeahead.jquery.js"></script>
        <title>Anchor</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}


server.listen(port, (error) => {
  if (error)
    console.error(error)
  else {
    console.info('----------')
    console.info(`Server listening on port ${port}.`)
    console.info('==========')
  }
})
