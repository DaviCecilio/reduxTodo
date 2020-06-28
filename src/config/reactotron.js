import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

console.tron = Reactotron
Reactotron.clear()

export default Reactotron.configure({ name: 'ReduxTodo' }).use(reactotronRedux()).connect()
