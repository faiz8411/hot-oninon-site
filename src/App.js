
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Breakfasts from './components/Breakfasts/Breakfasts';
import Dinners from './components/Dinners/Dinners';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/food/:serviceId">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/breakfast">
            <Breakfasts></Breakfasts>
          </Route>
          <Route path="/lunch">
            <Services></Services>
          </Route>
          <Route path="/dinner">
            <Dinners></Dinners>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


