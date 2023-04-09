import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import Box from '@mui/material/Box';
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import 'react-phone-number-input/style.css';
import "@progress/kendo-theme-default/dist/all.css";
import 'react-phone-number-input/style.css';
import { ChooseCollege } from "./ChooseColleges";

export const ChoiceFilling = () => {
  const [choiceNumber, setChoiceNumber] = React.useState(1);
  const [choices, setChoices] = React.useState([]);

  const chooseCollegeHandler = () => {
    setChoiceNumber(prevNumber => prevNumber + 1);
  }

  const handleCollegeChange = (choiceIndex: number, object: object) => {
    const newChoices = [...choices];
    newChoices[choiceIndex] = object;
    setChoices(newChoices);
  }

  return (
    <>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '100%' }, }}
        noValidate
        autoComplete="off"
        style={{ backgroundColor: "white", borderRadius: "5px", padding: "20px" }}
      >
        <Typography variant="h5" gutterBottom>
          Academic Information
        </Typography>
        {[...Array(choiceNumber)].map((_, i) => (
          <ChooseCollege
            key={i}
            id={`choice-${i + 1}`}
            onSelect={(object) => handleCollegeChange(i, object)}
          />
        ))}
        <Button variant="contained" onClick={chooseCollegeHandler}>Add more Choice</Button>
        <Button variant="contained" onClick={() => console.log(choices)}>Print Choices</Button>
      </Box>
    </>
  )
}
