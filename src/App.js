import { Switch, Route } from "react-router-dom"
import { ContainerDiv } from './StyledComponents/StyledDivs'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/AboutPage'


function App () {
  return (
    <ContainerDiv>
      <Navbar />
      <Switch>
        <Route path='/AboutPage'>
          <AboutPage />
        </Route>
        <h1>HOME PAGE</h1>
      </Switch>
    </ContainerDiv>
  )
}

export default App
