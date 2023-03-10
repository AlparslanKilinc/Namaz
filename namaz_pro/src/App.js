import "./index.css";
import createTheme from "@mui/material/styles/createTheme";
import { Card, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  /// Get Location
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  useEffect(() => {
    const city = "New York"; // Replace with the name of the city you want to get the namaz times for
    const country = "USA"; // Replace with the name of the country the city is in

    const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

    axios
      .get(url)
      .then((response) => {
        // The namaz times are in the `data` object of the response
        const namazTimes = response.data.data.timings;
        console.log(namazTimes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const theme = createTheme({
    Typography: {
      fontSize: 22,
      fontFamily: [
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  function changeBackground(event) {
    event.target.style.background = "red";
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <Typography variant="h1">alparslan</Typography>
          <Card>This should work </Card>
          <button onClick={(event) => changeBackground(event)}>
            click here if you think Alpazon sucks at apex
          </button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
