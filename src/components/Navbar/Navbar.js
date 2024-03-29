import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";

import data from "../../data/states.json";

import Logo from "./Logo/Logo";
import LocateMeButton from "./LocateMeButton/LocateMeButton";
import StatesDropdown from "./StatesDropdown/StatesDropdown";

export default function Navbar({ userState }) {
  const [states, setStates] = useState([]);

  const fetchListOfStates = () => {
    setStates(data);
  };

  useEffect(() => {
    fetchListOfStates();
  }, []);

  return (
    <Box id="navbar" mt={4}>
      <Grid className="navbar-container" container justify="space-between">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <Grid className="two-btn-container" container alignItems="center" justify="space-between" style={{ width: "auto" }}>
          <StatesDropdown states={states} />
          {userState && <LocateMeButton userState={userState} />}
        </Grid>
      </Grid>
    </Box>
  );
}
