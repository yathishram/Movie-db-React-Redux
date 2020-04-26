import React, { Component } from "react";
import Header from "../components/header/header";
import HomepageContent from "../components/homepage-content/homepageContent";

class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <HomepageContent />
      </>
    );
  }
}

export default Homepage;
