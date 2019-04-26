import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NavComponent from './components/nav/nav.component';
import './include/bootstrap';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TicTacComponent } from './components/tic-tac/tic-tac.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import ChuckNorrisComponent from './components/chuck-norris/chuck-norris.component';
import { NestedComponent } from './components/nested/nested.component';
import SignInComponent from './components/sign-in/sign-in.component';
import ClickerComponent from './components/clicker/clicker.component';
import { SpaceshipsComponent } from './components/spaceships/spaceships.component';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <div id="main-content-container">
          <Switch>
            <Route path="/chuck-norris" component={ChuckNorrisComponent} />
            <Route path="/clicker" component={ClickerComponent} />
            <Route path="/first" component={FirstComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/movies" component={MoviesComponent} />
            <Route path="/nested" component={NestedComponent} />
            <Route path="/pokemon" component={PokemonComponent} />
            <Route path="/second" component={SecondComponent} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route path="/spaceships" component={SpaceshipsComponent} />
            <Route path="/tic-tac-toe" component={TicTacComponent} />
            <Route component={HomeComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
