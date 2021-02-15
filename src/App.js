import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Men from './Components/M/Men';
import Women from './Components/W/Women';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/Men'>
              <Men/>
            </Route>
            <Route exact path='/Women'>
              <Women/> 
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
