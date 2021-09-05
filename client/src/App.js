import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./context/protectedRoutes";
import { AuthProvider } from "./context/auth";
import 'bulma/css/bulma.min.css';


function App() {
  return(
    <AuthProvider>
    <Router>
    <ProtectedRoute exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    </Router>
    </AuthProvider>
  )
}

export default App;
