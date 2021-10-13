import Home from './Pages'
import { Switch, Route } from 'react-router-dom'
import Email from './Pages/emailpage'

function App () {
  return (
    <div>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/emailpage' component={ Email } exact />
      </Switch>
    </div>
  )
}

export default App
