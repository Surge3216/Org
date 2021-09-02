import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

function App() {
  return(
    <AuthProvider>
    <Router>
    <Container>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    </Container>
    </Router>
    </AuthProvider>
  )
}

export default App;
