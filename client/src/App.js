import Home from "./pages/home/home";
import Login from "./pages/login/login";
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
    <Container>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/login" component={Login}/>
    </Container>
    </Router>
  )
}

export default App;
