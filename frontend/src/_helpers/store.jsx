import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../_reducers'

const loggerMiddleware = createLogger()

// Uncomment this to enable tracing in redux devtools
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       trace: true, // (action) => { return ‘trace as string’; }
//       traceLimit: 25,
//     })
//     : compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
))
