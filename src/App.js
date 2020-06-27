import React from 'react'
import { Provider } from 'react-redux'

import GlobalStyles from './assets/styles/globalStyles'
import TodoList from './components/todoList'
import store from './store'

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    </>
  )
}

export default App
