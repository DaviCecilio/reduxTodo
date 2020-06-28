import { createStore, compose, applyMiddleware } from 'redux'
import Reactotron from '../config/reactotron'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(...[]), Reactotron.createEnhancer()))

export default store
