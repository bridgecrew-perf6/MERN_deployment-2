import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import AllPets from './components/AllPets';
import PetForm from './components/PetForm';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-2">
      <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path='/'>
            <AllPets />
          </Route>
          <Route exact path='/pets/new'>
            <PetForm />
          </Route>
          <Route exact path='/pets/:_id'>
            <OnePet />
          </Route>
          <Route exact path='/pets/edit/:_id'>
            <EditPet />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
