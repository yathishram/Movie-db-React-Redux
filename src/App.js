import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/navbar/navbar";
import MovieDetails from "./components/movies/movieDetails";
import MovieList from "./components/movies-list/movieList";
import SeriesList from "./components/series-list/seriesList";
import SeriesDetails from "./components/series/seriesDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/movie/:movieId" component={MovieDetails} />
          <Route exact path="/movies" component={MovieList} />
          <Route exact path="/series" component={SeriesList} />
          <Route path="/series/:seriesId" component={SeriesDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
