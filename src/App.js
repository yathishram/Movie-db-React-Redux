import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import NavBar from "./components/navbar/navbar";
import MovieDetails from "./components/movies/movieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/movie/:movieId" component={MovieDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
