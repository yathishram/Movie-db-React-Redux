import React from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import { image_url } from "../../config";

const MoviesPreview = ({ movie }) => {
  return (
    <>
      <Col md={6} lg={3} className="text-center">
        <Link to={"/movie/" + movie.id}>
          <Image src={image_url + movie.poster_path} className="shadow p-3 mb-5 bg-white rounded" />
        </Link>
        <p className="text-muted">{movie.title}</p>
      </Col>
    </>
  );
};

export default MoviesPreview;
