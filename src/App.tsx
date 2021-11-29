import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage';
import { store } from './redux/store';

function App() {
  return(
    <Provider  store = {store}>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
