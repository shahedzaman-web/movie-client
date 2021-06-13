import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import HomePage from './Components/Home/HomePage';
import AddMovie from './Components/AddMovie/AddMovie';
import EditMovie from './Components/EditMovie/EditMovie';
import UpdateMovie from './Components/EditMovie/UpdateMovie';
import { useState } from 'react';

function App() {
  const [updateMovieInfo, setUpdateMovieInfo] = useState([]);
  
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
<HomePage/>
        </Route>
        <Route path="/addMovie">
          <AddMovie/>
        </Route>
        <Route path="/editMovie">
         <EditMovie setUpdateMovieInfo={setUpdateMovieInfo}></EditMovie>
        </Route>
        <Route path="/update/:id">
          <UpdateMovie updateMovieInfo={updateMovieInfo} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
