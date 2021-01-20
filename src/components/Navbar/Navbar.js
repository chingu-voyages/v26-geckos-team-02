import React, { Component } from "react";
import Logo from "./Logo/Logo";
import LocateMeButton from "./LocateMeButton/LocateMeButton";
import SearchLocation from "./SearchLocation/SearchLocation";

export default class Navbar extends Component {
  render() {
    const { coordinates } = this.props;

    return (
      <>
        [Navbar]
        <Logo />
        <LocateMeButton coordinates={coordinates} />
        <SearchLocation />
      </>
    );
  }
}
