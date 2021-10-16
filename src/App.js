
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Breakfasts from './components/Breakfasts/Breakfasts';
import Dinners from './components/Dinners/Dinners';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/food/:serviceId">
              <FoodDetails></FoodDetails>
            </PrivateRoute>
            <Route path="/breakfast">
              <Breakfasts></Breakfasts>
            </Route>
            <Route path="/lunch">
              <Services></Services>
            </Route>
            <Route path="/dinner">
              <Dinners></Dinners>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


