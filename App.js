import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Appp from './Appp';
import New from './components/New';
import Menu from './components/Menu';
function App() {
  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={Appp}></Route>
      <Route path='/profile-info' component={New}></Route>
    </Switch>
    </>
  );
}

export default App;
