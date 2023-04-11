import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Button, Grid } from "@mui/material";
import "react-phone-number-input/style.css";

import "@progress/kendo-theme-default/dist/all.css";

import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { colleges, streams, programs } from "../../Shared/data";

import "react-phone-number-input/style.css";

interface ChooseCollegeProps {
  id: string;
  onSelect: (selectedValues: {
    stream: string;
    program: string;
    college: string;
  }) => void;
}

export const ChooseCollege = (props) => {
  const [streamSelected, setStreamSelected] = React.useState("");
  const [programSelected, setProgramSelected] = React.useState("");

  const handleStreamChange = (event: SelectChangeEvent) => {
    const stream = event.target.value as string;
    setStreamSelected(stream);
    props.onSelect({
      stream,
      program: programSelected,
    });
  };

  const handleProgramChange = (event: SelectChangeEvent) => {
    const program = event.target.value as string;
    setProgramSelected(program);
    props.onSelect({
      stream: streamSelected,
      program,
    });
  };

  const confirmCollegeHandler = () => {
    // props.onSelect({ stream: streamSelected, program: programSelected, college: collegeSelected });
  };

  return (
    <>
      <span>Choice #{props.choiceNumber}</span>
      <div
        style={{
          boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.24)",
          borderRadius: "5px",
          padding: "5px",
          marginBottom: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel id={`demo-simple-select-label-stream-${props.id}`}>
                Choose Stream
              </InputLabel>
              <Select
                labelId={`demo-simple-select-label-stream-${props.id}`}
                id={`stream-${props.id}`}
                value={streamSelected}
                label="Choose Stream"
                onChange={handleStreamChange}
                sx={{ "& .MuiMenuItem-root": { whiteSpace: "pre-wrap" } }}
              >
                {streams.map((stream, i) => {
                  return (
                    <MenuItem key={stream} value={stream}>
                      {stream}
                      <br />
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel id={`demo-simple-select-label-program-${props.id}`}>
                Select Specific Program
              </InputLabel>
              <Select
                labelId={`demo-simple-select-label-program-${props.id}`}
                id={`program-${props.id}`}
                value={programSelected}
                label="Select Specific Program"
                onChange={handleProgramChange}
                sx={{ "& .MuiMenuItem-root": { whiteSpace: "pre-wrap" } }}
              >
                {programs.map((program, i) => {
                  return (
                    <MenuItem key={program} value={program}>
                      {program}
                      <br />
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
