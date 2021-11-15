import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import Navbar from './components/NavBar'
import { GlobalStyle } from "./components/globalComponents/globalElements";

function App() {
  return (     
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/recipes' exact component={Recipes} />
        <Route path="/recipes/:id" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
