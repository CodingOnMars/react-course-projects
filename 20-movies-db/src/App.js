import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './SinglEMovie';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='movies/:id' children={<Movie />} />
    </Switch>
  );
}

export default App;
