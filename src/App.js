import Home from './Pages'
import { Switch, Route } from 'react-router-dom'
import Email from './Pages/email'

function App () {
  return (
    <div>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/email' component={ Email } exact />
      </Switch>
    </div>
  )
}

export default App
