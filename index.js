import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import App from './src/containers/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
//const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
