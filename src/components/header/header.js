import React from "react";
//import MovieImage from "./media/movieimage.jpg";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <section className="banner">
        <Container className="text-center">
          <h3 className="display-3">WHATCH ME!</h3>
          <p>
            Whatch me! Confused about the next movie? Want to whatch your next fav lit next series? Whatch me to the
            rescue! A simple webapp used to look up movies and their related information! Kind of like a IMDb, but using
            a complex tech stack. Have fun!
          </p>
        </Container>
      </section>
    </>
  );
};

export default Header;
