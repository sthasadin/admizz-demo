import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { DropDownSelect } from "../DropDownSelect";
import { CoursesService } from "@/store/api/coursesApi";

const preObj = { label: "", value: "" };
const preArr = [];

const selectCollege = ({
  allStreams,
  choiceNumber,
  choices,
  setChoices,
  removeChoice,
}: any) => {
  const [allPrograms, set_allPrograms] = useState([]);
  const [allColleges, setallColleges] = useState([]);
  const [rawColleges, setRawColleges] = useState([]);

  let i = choiceNumber - 1;
  let { selectedStream, selectedProgram, selectedCollege } = choices[i];
  const coursesService = new CoursesService();

  const selectedLevel = useSelector((state) => state.courses.selectedLevel);
  const _appliedColleges = useSelector(
    (state) => state.courses.appliedColleges
  );

  const _getPrograms = async (level, stream) => {
    let response = await coursesService.getAllPrograms(level, stream);
    if (response.isSuccess) {
      set_allPrograms(
        response?.data?.map(({ name: label, _id: value }) => ({ label, value }))
      );
    }
  };

  const _getColleges = async (level, stream, program) => {
    let response = await coursesService.getCollegesByCourses(
      level,
      stream,
      program
    );

    if (response.isSuccess) {
      setRawColleges(response.data);
      setallColleges(
        response?.data?.map((item) => {
          if (item.college) {
            return {
              label: item.college.name,
              value: item.college.college_slug,
            };
          }
        })
      );
    }
  };

  React.useEffect(() => {
    let appliedCollege = _appliedColleges.find((a) => a.id === choiceNumber);
    if (appliedCollege) {
      setSelectedStream({
        label: appliedCollege?.collegeStream,
        value: allStreams.find((s) => s.label === appliedCollege?.collegeStream)
          ?.value,
      });
    }
  }, [_appliedColleges]);

  React.useEffect(() => {
    let appliedCollege = _appliedColleges.find((a) => a.id === choiceNumber);
    if (appliedCollege && selectedStream?.label) {
      setSelectedProgram({
        label: appliedCollege?.collegeProgram,
        value: allPrograms.find(
          (s) => s.label === appliedCollege?.collegeProgram
        )?.value,
      });
    }
  }, [_appliedColleges, selectedStream]);

  React.useEffect(() => {
    if (selectedStream.label) {
      _getPrograms(selectedLevel._id, selectedStream.value);
    }
  }, [selectedStream, selectedLevel]);

  //fetch college
  React.useEffect(() => {
    if (selectedStream.label && selectedProgram.label) {
      _getColleges(
        selectedLevel._id,
        selectedStream.value,
        selectedProgram.value
      );
    }
  }, [selectedProgram]);

  const setSelectedStream = (e) => {
    let data = [...choices];
    data[i].selectedStream = e;
    data[i].selectedProgram = preObj;
    data[i].selectedCollege = preObj;
    setChoices(data);
  };

  const setSelectedProgram = (e) => {
    let data = [...choices];
    data[i].selectedProgram = e;
    data[i].selectedCollege = preObj;
    setChoices(data);
  };

  const setSelectedCollege = (e) => {
    let data = [...choices];

    let thisCollege = rawColleges.find(
      (clg) => clg.college.college_slug === e.value
    );
    if (
      thisCollege?.college?._id !== undefined &&
      selectedStream.value !== undefined
    ) {
      const isAlreadyExist = data.some(
        (clg) =>
          clg.selectedCollege.college_slug === e.value &&
          clg.collegeStream === selectedStream?.label &&
          clg.collegeProgram === selectedProgram?.label
      );

      if (!isAlreadyExist) {
        data[i].selectedCollege = {
          ...e,
          collegeName: thisCollege.college?.name || "",
          image: thisCollege.college?.college_logo || "",
          address: thisCollege.college?.address || "",
          college_slug: thisCollege.college?.college_slug || "",
          collegeStream: selectedStream?.label,
          collegeProgram: selectedProgram?.label,
          collegeEmail: thisCollege.college?.email,
        };
        setChoices(data);
      }
    }
  };
  return (
    <>
      <Grid
        container
        className="dashboard-basic-info__row"
        justify="space-between"
        direction="row"
      >
        <Grid>
          <div className="dashboard-basic-info__formTitle form--title">
            Choice # {choiceNumber}
          </div>
        </Grid>

        {i !== 0 && (
          <Grid>
            <img
              src="/cross-sign.png"
              alt="cross_sign"
              onClick={() => removeChoice(i)}
            />
          </Grid>
        )}
      </Grid>
      <Grid
        container
        className="dashboard-basic-info__row"
        justify="space-around"
        direction="row"
      >
        <Grid
          className={"dashboard-basic-info__grid"}
          item
          sm={12}
          md={6}
          xs={12}
        >
          <DropDownSelect
            title="Choose Stream"
            options={allStreams}
            defaultvalue={selectedStream}
            handleChange={(e) => setSelectedStream(e)}
          />
        </Grid>
        <Grid
          className={"dashboard-basic-info__grid"}
          item
          sm={12}
          md={6}
          xs={12}
        >
          <DropDownSelect
            title="Select Specific program"
            options={allPrograms}
            defaultvalue={selectedProgram}
            handleChange={(e) => setSelectedProgram(e)}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className="dashboard-basic-info__row"
        justify="space-around"
        direction="row"
      >
        <Grid
          className={"dashboard-basic-info__grid"}
          item
          sm={12}
          md={12}
          xs={12}
        >
          <DropDownSelect
            title="Select College"
            options={allColleges}
            defaultvalue={selectedCollege}
            handleChange={(e) => setSelectedCollege(e)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default selectCollege;
