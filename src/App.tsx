import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import FormInputdata from './Components/Forms/Form';
import ShowData from './Components/UI/ShowData';

function App() {
  const [IsShow, setIsShow] = useState(false)
  const ShowHandler = () =>{
    IsShow? setIsShow(false): setIsShow(true)
  }
  return (
    <Switch>
    <Route path="/Input">
      {!IsShow && <FormInputdata onShow={ShowHandler} />}
      {IsShow && <ShowData />}
    </Route>
    <Route path='*'>
      <Redirect to='/Input' />
    </Route>
    </Switch>
  );
}

export default App;

