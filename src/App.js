import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/navbar/navbar";
import MovieDetails from "./components/movies/movieDetails";
import SeriesDetails from "./components/series/seriesDetails";
import SinglePage from "./pages/singlePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/movie/:movieId" component={MovieDetails} />
          <Route exact path="/:pageName" component={SinglePage} />
          <Route path="/series/:seriesId" component={SeriesDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
