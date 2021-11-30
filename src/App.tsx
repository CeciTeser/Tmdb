import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <Provider  store = {store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
