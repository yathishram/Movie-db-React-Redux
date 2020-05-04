import React from "react";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import MovieList from "../components/movies-list/movieList";
import SearchBar from "../components/search/searchBar-movies";
import SearchBarSeries from "../components/search/searchBar-Series";
import SeriesList from "../components/series-list/seriesList";
import TopMovieList from "../components/toprated/topRatedMovies";

const SinglePage = ({ match, history }) => {
  if (match.params.pageName === "movies") {
    return (
      <>
        <Container>
          <SearchBar />
        </Container>
        <Container>
          <MovieList />
        </Container>
      </>
    );
  } else if (match.params.pageName === "series") {
    return (
      <>
        <Container>
          <SearchBarSeries />
        </Container>
        <Container>
          <SeriesList />
        </Container>
      </>
    );
  } else if (match.params.pageName === "topmovies") {
    return (
      <Container>
        <TopMovieList />
      </Container>
    );
  } else {
    return (
      <Container>
        <h4>404 Not Found</h4>
      </Container>
    );
  }
};

export default withRouter(SinglePage);
