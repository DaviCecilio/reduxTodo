import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import GlobalStyles from './assets/styles/globalStyles'

import TodoList from './components/todoList'
import Header from './components/header'

console.tron.log('hello world')

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Header />
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    </>
  )
}

export default App
