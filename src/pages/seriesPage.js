import React from "react";
import { Container } from "react-bootstrap";
import SearchBarSeries from "../components/search/searchBar-Series";
import SeriesList from "../components/series-list/seriesList";

const SeriesPage = () => {
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
};

export default SeriesPage;
