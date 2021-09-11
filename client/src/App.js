import Home from './pages/home/index'
import EditBio from'./pages/EditBio/index'
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Players from "./pages/players";
import Challenges from './pages/challenges';
import NewChallenge from './pages/NewChallenge'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./context/protectedRoutes";
import { AuthProvider } from "./context/auth";
import 'bulma/css/bulma.min.css';


function App() {
 
  return(
    
    <AuthProvider>   
    <Router>
    <Switch>   
    <ProtectedRoute exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route path="/edit/bio" component={EditBio}/>
    <Route path="/newChallenge" component={NewChallenge}/>
    <ProtectedRoute exact path="/players" component={Players}/>
    <ProtectedRoute exact path="/challenges" component={Challenges}/>
    </Switch>
    </Router>
    </AuthProvider>
  )
}

export default App;