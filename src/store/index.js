import rootReducer from './reducers'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {
  const logger = createLogger()

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware, logger)
    )

  if (module.hot) {
    module.hot.accept('../store/reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
