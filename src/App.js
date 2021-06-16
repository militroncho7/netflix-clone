import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';

function App() {
  const user = null;
  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Switch>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/chechkout'>
                <Paypal />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
