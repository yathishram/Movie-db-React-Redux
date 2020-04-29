import React from "react";
import { Container } from "react-bootstrap";
import MovieList from "../components/movies-list/movieList";
import SearchBar from "../components/search/searchBar-movies";

const MoviesPage = () => {
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
};

export default MoviesPage;
