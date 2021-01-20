import React from "react";
import Button from "@material-ui/core/Button";
import reverse from "reverse-geocode";

const ENV_DEV = process.env.NODE_ENV === "development";

const clickLocateMe = (lat, lon) => {
  const { state } = reverse.lookup(lat, lon, "us");

  ENV_DEV && console.log(`State: ${state}`);
};

export default function LocateMeButton({ coordinates }) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          clickLocateMe(coordinates.latitude, coordinates.longitude)
        }
      >
        Locate Me
      </Button>
    </div>
  );
}
