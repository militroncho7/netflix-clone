import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';

function App() {
  const user = "pepe";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Switch>
              <Route path='/profile'>
                <Profile />
              </Route>
              <Route path='/checkout'>
                <Paypal />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111"
  },
}));

export default App;
