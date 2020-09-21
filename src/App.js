import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import Container from './styles/Container'

function App() {
  return (
    <div className="App">
      <h1>Movie Details</h1>
      <Container>
        <MovieList/>
        <MovieDetails/>
      </Container>
    </div>
  );
}

export default App;
