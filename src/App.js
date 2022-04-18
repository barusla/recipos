import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import NewRecipe from "./pages/newRecipe";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/newRecipe' exact component={NewRecipe} />
        <Route path='/recipes' exact component={Recipes} />
        <Route path='/recipes/:id' component={Recipe} />
      </Switch>
    </Router>
  );
}

export default App;
