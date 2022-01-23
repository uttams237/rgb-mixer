import "./styles.css";
import { Slider, Box } from "@mui/material";
import { useState } from "react";
// import  from '@mui/material/Box';

export default function App() {
  const [redValue, setredValue] = useState(40);
  const [greenValue, greenValueValue] = useState(40);
  const [blueValue, blueValueValue] = useState(40);
  return (
    <div className="App">
      <div className="sliders">
      <h1>COLOR MIXER</h1>
      <Slider
        sx={{
          width: "80%",
          color: "red",
          m: "auto"
        }}
        max="225"
        valueLabelDisplay="on"
        value={redValue}
        onChange={(event) => {
          setredValue(event.target.value);
        }}
      />
      <Slider
        sx={{
          width: "80%",
          color: "green",
          m: "30px"

        }}
        valueLabelDisplay="on"
        max="225"
        value={greenValue}
        onChange={(event) => {
          greenValueValue(event.target.value);
        }}
      />
      <Slider
        sx={{
          width: "80%",
          color: "blue",
          m: "auto"

        }}
        max="225"
        valueLabelDisplay="on"
        value={blueValue}
        onChange={(event) => {
          blueValueValue(event.target.value);
        }}
      />
      </div>
      
      {/* <h3>{redValue}</h3>
      <h3>{greenValue}</h3>
      <h3>{blueValue}</h3> */}
      <div className="colorCard">
      <Box
        sx={{
          width: "75%",
          borderRadius: 1,
          height: 300,
          // backgroundColor: 'primary.dark',
          backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,

          // color: "red"
          // bgcolor: rgb(20,20,20,1)
        }}
      >
      <h2>{`rgb(${redValue},${greenValue},${blueValue})`}</h2>

      </Box>

      </div>
    </div>
  );
}
