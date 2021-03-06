import { Provider } from 'react-redux';
import { store } from './redux/store';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import  Dashboard  from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import SeriesPage from './pages/SeriesPage';
import AdminPage from './pages/AdminPage';
import MoviesPage from './pages/MoviesPage';
import CardDetailPage from './pages/CardDetailPage';



function App() {

  return(
    <Provider store = {store}>

      <Router>

        <Switch>

          <Route path="/tv" component={SeriesPage}/>
          <Route path="/movies" component={MoviesPage}/>
          <Route path="/admin" component={AdminPage}/>
          <Route path="/users" component={UsersPage}/>
          <Route path="/detail/:idItem" component={CardDetailPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignUpPage}/>
          <Route path="/" component={Dashboard}/>
          
        </Switch>

      </Router>

    </Provider>
  )
}

export default App;
